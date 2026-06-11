import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'resume', label: 'Experience' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home';
      const y = window.scrollY + 120;
      document.querySelectorAll('section[id]').forEach((s) => {
        if (y >= s.offsetTop) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/85 dark:bg-paper/90 backdrop-blur-md border-b border-line transition-colors">
      <div className="wrap flex items-center justify-between h-16">
        <button type="button" onClick={() => go('home')} className="group" aria-label="Home">
          <Logo />
        </button>

        <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl border border-line bg-surface/50">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                active === l.id ? 'bg-accent text-white' : 'text-stone hover:text-ink'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:inline text-sm font-semibold text-ink hover:text-accent transition-colors"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden text-ink font-medium text-sm px-2"
            aria-label="Menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-surface px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button key={l.id} type="button" onClick={() => go(l.id)} className="text-left text-ink font-medium py-1">
              {l.label}
            </button>
          ))}
          <button type="button" onClick={() => go('contact')} className="text-left text-accent font-semibold py-1">
            Contact
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
