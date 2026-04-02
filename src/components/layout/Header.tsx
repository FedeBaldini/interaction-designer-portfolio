'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Hexagon, Layers, User, Mail, ArrowRight, Home } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Layers },
  { href: '/story', label: 'About Me', icon: User },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-5 lg:p-6 flex justify-center pointer-events-none">
      <div
        className="w-full max-w-7xl flex items-center justify-between px-6 py-4 rounded-2xl pointer-events-auto"
        style={{
          background: 'rgba(10, 10, 10, 0.4)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.02)',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group" aria-label="Home — Interaction Designer">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Hexagon className="text-black w-4 h-4" />
          </div>
          <span className="text-lg font-bold tracking-widest hidden md:block uppercase">
            Interaction<span className="text-cyan-400">Designer</span>
          </span>
        </Link>

        {/* Central Nav */}
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                  active
                    ? 'bg-white text-black shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:block text-sm font-medium">{item.label}</span>
                </span>
              </Link>
            );
          })}

          {/* Contact Icon: Visible ONLY on Mobile */}
          <Link
            href="/contact"
            className={`relative px-4 py-2 rounded-xl transition-all duration-300 md:hidden ${
              pathname === '/contact'
                ? 'bg-white text-black shadow-lg'
                : 'text-white/80 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-4 h-4" />
            </span>
          </Link>
        </nav>

        {/* Let's Talk Button: Visible ONLY on Desktop */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-sm font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          Let&apos;s Talk <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </header>
  );
}
