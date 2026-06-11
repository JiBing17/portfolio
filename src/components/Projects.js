import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import SectionLabel from './SectionLabel';
import SectionReveal from './SectionReveal';

const Projects = () => {
  const [active, setActive] = useState(null);
  const [slide, setSlide] = useState(0);

  const pics = useMemo(() => (active ? active.pictures.slice(1) : []), [active]);

  const open = (p) => {
    setActive(p);
    setSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setActive(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-surface border-y border-line">
      <div className="wrap">
        <SectionReveal>
          <SectionLabel
            index="03"
            title="Projects"
            subtitle="Tap a preview to explore."
            className="animate-in"
          />

          <ul className="projects-showcase">
            {projects.map((project, i) => (
              <li
                key={project.title}
                className={`project-row animate-in ${i % 2 === 1 ? 'project-row-reverse animate-in-right' : 'animate-in-left'}`}
                style={{ '--reveal-delay': `${100 + i * 75}ms` }}
              >
                <button
                  type="button"
                  onClick={() => open(project)}
                  className="project-row-media group/media"
                >
                  <img
                    src={project.pictures[0]}
                    alt=""
                    className="project-row-img"
                  />
                  <span className="project-row-hover">
                    <span>View gallery</span>
                    <span className="project-row-hover-icon" aria-hidden>↗</span>
                  </span>
                </button>

                <div className="project-row-body">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink">{project.title}</h3>
                  <p className="mt-4 text-stone leading-relaxed">{project.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li key={tool} className="chip">{tool}</li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
                    <button
                      type="button"
                      onClick={() => open(project)}
                      className="text-ink hover:text-accent transition-colors"
                    >
                      Gallery →
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-4"
                    >
                      {project.linkLabel}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>

      {active && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" role="dialog" aria-modal>
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" onClick={close} />
          <div className="relative w-full sm:max-w-4xl max-h-[92vh] bg-surface border border-line sm:rounded-2xl sm:mx-4 flex flex-col overflow-hidden">
            <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-line">
              <div>
                <p className="font-serif text-xl text-ink">{active.title}</p>
                <p className="text-sm text-stone mt-1">{active.tools.join(' · ')}</p>
              </div>
              <button onClick={close} className="text-stone hover:text-ink text-2xl leading-none px-2" aria-label="Close">
                ×
              </button>
            </div>

            <div className="relative bg-paper flex items-center justify-center min-h-[240px] flex-1">
              {pics.length > 0 ? (
                <>
                  <img src={pics[slide]} alt="" className="max-h-[55vh] w-full object-contain p-8" />
                  {pics.length > 1 && (
                    <>
                      <button
                        onClick={() => setSlide((s) => (s - 1 + pics.length) % pics.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg border border-line bg-surface text-ink hover:border-accent"
                        aria-label="Previous"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setSlide((s) => (s + 1) % pics.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg border border-line bg-surface text-ink hover:border-accent"
                        aria-label="Next"
                      >
                        ›
                      </button>
                      <p className="absolute bottom-3 text-xs text-stone tabular-nums">
                        {slide + 1} / {pics.length}
                      </p>
                    </>
                  )}
                </>
              ) : (
                <p className="text-stone text-sm p-8">No additional images.</p>
              )}
            </div>

            <div className="px-6 py-5 border-t border-line">
              <p className="text-sm text-stone leading-relaxed">{active.description}</p>
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-semibold text-accent hover:underline"
              >
                {active.linkLabel} →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
