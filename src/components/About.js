import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import pfp from '../icons/pfp.jpg';
import { profile } from '../data/profile';
import SectionLabel from './SectionLabel';
import SectionReveal from './SectionReveal';

const socialIcons = { github: FaGithub, linkedin: FaLinkedin, instagram: FaInstagram };

const bold = (text, words) => {
  if (!words?.length) return text;
  const sorted = [...words].sort((a, b) => b.length - a.length);
  const re = new RegExp(`(${sorted.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return text.split(re).map((part, i) =>
    words.includes(part) ? <strong key={i} className="text-ink font-semibold">{part}</strong> : part
  );
};

const About = () => (
  <section id="about" className="py-20 sm:py-28 bg-surface">
    <div className="wrap">
      <SectionReveal>
        <SectionLabel index="01" title="About" subtitle={profile.tagline} className="animate-in" />

        <div className="about-layout">
          <aside
            className="about-sidebar animate-in animate-in-left"
            style={{ '--reveal-delay': '90ms' }}
          >
            <figure className="about-photo">
              <img src={pfp} alt={profile.name} className="about-photo-img" />
            </figure>

            <div className="about-sidebar-foot">
              <h3 className="font-serif text-xl font-bold text-ink">{profile.name}</h3>
              <p className="mt-1 text-sm text-accent font-medium">{profile.title}</p>
              <p className="mt-0.5 text-sm text-stone">{profile.university} · {profile.major}</p>

              <div className="about-socials">
                {profile.socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="about-social-link"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          <div
            className="about-content animate-in animate-in-right"
            style={{ '--reveal-delay': '170ms' }}
          >
            <div className="about-content-main">
              <p className="about-lead">{profile.intro}</p>

              <ul className="flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <li key={i} className="chip chip-accent">{i}</li>
                ))}
              </ul>

              <div className="about-story">
                {profile.aboutParagraphs.map((p, idx) => (
                  <p key={idx} className="about-story-p text-[16px] sm:text-[17px] leading-[1.85] text-stone">
                    {bold(p.text, p.highlights)}
                  </p>
                ))}
              </div>
            </div>

            <footer className="about-footer">
              <div>
                <p className="about-footer-label">Email</p>
                <a href={`mailto:${profile.email}`} className="text-sm font-medium text-ink hover:text-accent transition-colors break-all">
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="about-footer-label">Location</p>
                <p className="text-sm font-medium text-ink">{profile.location}</p>
              </div>
            </footer>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default About;
