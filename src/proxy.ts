import { NextResponse, type NextRequest } from 'next/server';
import { locales, defaultLocale, isLocale, type Locale } from '@/lib/i18n';

const COOKIE = 'NEXT_LOCALE';

/** Resolve locale: explicit cookie → Accept-Language → default (en). */
function resolveLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const header = req.headers.get('accept-language');
  if (header) {
    const ranked = header
      .split(',')
      .map((part) => {
        const [tag, q] = part.trim().split(';q=');
        return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);
    for (const { tag } of ranked) {
      if (tag.startsWith('it')) return 'it';
      if (tag.startsWith('en')) return 'en';
    }
  }
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const locale = resolveLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE, locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  // Run on everything except Next internals, API routes, and files (with a dot:
  // sitemap.xml, robots.txt, favicon.ico, /portfolio/*.jpg, icons, og image…).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
