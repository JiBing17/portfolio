import { profile } from '../data/profile';
import Logo from './Logo';
import SectionReveal from './SectionReveal';

const Footer = () => (
  <footer id="contact" className="bg-footer text-footer-text transition-colors">
    <div className="wrap py-16 sm:py-20">
      <SectionReveal threshold={0.15}>
        <div className="grid sm:grid-cols-2 gap-12 items-end">
          <div className="animate-in" style={{ '--reveal-delay': '0ms' }}>
            <Logo className="text-accent-muted" />
            <p className="mt-6 font-serif text-2xl sm:text-3xl leading-tight">
              {profile.name}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block mt-4 text-lg sm:text-xl font-semibold hover:text-accent transition-colors break-all"
            >
              {profile.email}
            </a>
            <p className="mt-2 text-sm opacity-60">{profile.location}</p>
          </div>

          <div className="sm:text-right space-y-4 animate-in animate-in-right" style={{ '--reveal-delay': '100ms' }}>
            <div className="flex sm:justify-end gap-6 text-sm font-medium">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:text-accent hover:opacity-100 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold border border-footer-text/30 px-5 py-2.5 rounded-lg hover:bg-paper hover:text-ink transition-colors"
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-footer-text/15 text-xs opacity-50 animate-in" style={{ '--reveal-delay': '180ms' }}>
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </SectionReveal>
    </div>
  </footer>
);

export default Footer;
