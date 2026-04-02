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
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-5 lg:p-6 flex justify-center pointer-events-none">
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-4 pointer-events-auto bg-[#0a0a0a] border-2 border-[#F5F0E8]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group" aria-label="Home — Interaction Designer">
          <div className="w-10 h-10 bg-[#0a0a0a] border-2 border-[#00E5CC] flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[3px_3px_0px_#FF2D6B]">
            <Hexagon className="text-[#00E5CC] w-5 h-5" />
          </div>
          <span className="text-lg font-black tracking-widest hidden md:block uppercase font-champ text-[#F5F0E8]">
            Interaction<span className="text-[#00E5CC]">Designer</span>
          </span>
        </Link>

        {/* Central Nav */}
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 list-none m-0 p-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative px-4 py-2 transition-all duration-200 block font-mono text-sm uppercase tracking-wider ${
                      active
                        ? 'bg-[#F5F0E8] text-[#0a0a0a] font-bold'
                        : 'text-[#F5F0E8]/80 hover:text-[#00E5CC]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="hidden lg:block">{item.label}</span>
                    </span>
                  </Link>
                </li>
              );
            })}

            {/* Contact Icon: Visible ONLY on Mobile */}
            <li className="md:hidden">
              <Link
                href="/contact"
                aria-current={pathname === '/contact' ? 'page' : undefined}
                aria-label="Contact"
                className={`relative px-4 py-2 transition-all duration-200 block ${
                  pathname === '/contact'
                    ? 'bg-[#F5F0E8] text-[#0a0a0a]'
                    : 'text-[#F5F0E8]/80 hover:text-[#00E5CC]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Let's Talk Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-3 bg-[#FF2D6B] text-[#0a0a0a] text-sm font-bold font-mono uppercase tracking-wider hover:bg-[#F5F0E8] transition-colors cursor-pointer"
        >
          Let&apos;s Talk <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </header>
  );
}
