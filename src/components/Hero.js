import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { profile } from '../data/profile';
import HeroBalls from './HeroBalls';

const socials = { github: FaGithub, linkedin: FaLinkedin, instagram: FaInstagram };

const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden border-b border-line">
      <HeroBalls />
      <div className="hero-spotlight absolute inset-0 pointer-events-none" aria-hidden />
      <div className="hero-grid absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.2]" aria-hidden />
      <div className="hero-aurora absolute inset-0 pointer-events-none" aria-hidden />

      <div className="relative z-10 wrap w-full py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="hero-enter text-sm font-semibold text-accent mb-5 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-accent" />
            {profile.title} · {profile.location}
          </p>

          <h1 className="hero-enter hero-enter-1 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold leading-[1.08] tracking-tight">
            Hi, I&apos;m{' '}
            <span className="hero-gradient-text whitespace-nowrap">{profile.name}</span>
          </h1>

          <p className="hero-enter hero-enter-2 mt-6 text-lg sm:text-xl text-stone min-h-[2rem]">
            <TypeAnimation
              sequence={profile.typewriterRoles.flatMap((r) => [r, 2000])}
              speed={45}
              repeat={Infinity}
              className="text-ink font-semibold"
            />
          </p>

          <p className="hero-enter hero-enter-3 mt-5 text-base sm:text-lg text-stone leading-relaxed max-w-lg">
            {profile.intro}
          </p>

          <div className="hero-enter hero-enter-4 mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => go('projects')}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-accent hover:opacity-90 transition-opacity shadow-md shadow-accent/20"
            >
              View projects
            </button>
            <button
              type="button"
              onClick={() => go('contact')}
              className="px-6 py-3 rounded-xl text-sm font-semibold text-ink border border-line bg-surface/80 hover:border-accent/40 transition-colors"
            >
              Email me
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-stone hover:text-accent transition-colors"
            >
              Resume ↗
            </a>
          </div>

          <div className="hero-enter hero-enter-5 mt-8 flex items-center gap-4">
            {profile.socials.map((s) => {
              const Icon = socials[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-line bg-surface/60 text-stone hover:text-accent hover:border-accent/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
