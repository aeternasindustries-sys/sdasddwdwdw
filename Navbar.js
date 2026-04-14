'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/components/site-data';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav">
        <Link href="/" className="brand">
          <span className="brand-logo">A</span>
          <span>Dark Carnifix</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <Link href="/login" className="btn btn-outline btn-sm">Painel</Link>
          <Link href="/" className="btn btn-solid btn-sm">Sair</Link>
        </div>
      </nav>
    </header>
  );
}
