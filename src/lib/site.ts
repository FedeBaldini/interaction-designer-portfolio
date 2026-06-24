/**
 * Central site configuration. Single source of truth for canonical URL,
 * identity, and contacts used across metadata, sitemap, robots, and JSON-LD.
 *
 * `url` is the production domain (no trailing slash) — canonicals, sitemap,
 * robots, and OG URLs all derive from here.
 */
export const SITE = {
  name: 'Chiara Baldini',
  role: 'Graphic & Interaction Designer',
  url: 'https://www.chiara-baldini.com',
  description:
    'Portfolio of Chiara Baldini, a graphic and interaction designer exploring prototyping and interaction design at SUPSI. Selected work across branding, editorial, packaging, motion, and physical computing.',
  email: 'baldini.chiara00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chiara-baldini-05b9b3253/',
  locale: 'en_US',
} as const;
