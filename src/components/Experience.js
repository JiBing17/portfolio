import { education, experiences } from '../data/experience';
import { profile } from '../data/profile';
import SectionLabel from './SectionLabel';
import SectionReveal from './SectionReveal';

const Experience = () => (
  <section id="resume" className="py-20 sm:py-28">
    <div className="wrap">
      <SectionReveal>
        <SectionLabel
          index="04"
          title="Experience"
          className="animate-in"
          subtitle={
            <>
              Work history and education.{' '}
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                PDF resume
              </a>
            </>
          }
        />

        <ol className="exp-timeline">
          <li
            className="exp-timeline-item animate-in animate-in-left"
            style={{ '--reveal-delay': '90ms' }}
          >
            <div className="exp-timeline-track" aria-hidden>
              <span className="exp-timeline-dot exp-timeline-dot-edu" />
            </div>

            <article className="exp-timeline-body">
              <time className="exp-timeline-date">{education.period}</time>
              <p className="exp-timeline-type">Education</p>
              <h3 className="font-serif text-xl sm:text-2xl text-ink mt-1">{education.degree}</h3>
              <p className="mt-1 text-sm text-stone">{education.school}</p>

              <details className="exp-coursework">
                <summary className="exp-coursework-summary">Relevant coursework</summary>
                <ul className="exp-coursework-grid">
                  {education.courses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </details>
            </article>
          </li>

          {experiences.map((exp, i) => (
            <li
              key={exp.role + exp.period}
              className="exp-timeline-item animate-in animate-in-left"
              style={{ '--reveal-delay': `${160 + i * 65}ms` }}
            >
              <div className="exp-timeline-track" aria-hidden>
                <span className="exp-timeline-dot" />
              </div>

              <article className="exp-timeline-body">
                <time className="exp-timeline-date">{exp.period}</time>
                <h4 className="font-serif text-xl text-ink mt-1">{exp.role}</h4>
                <p className="mt-1 text-sm text-stone">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-ink underline underline-offset-2 hover:text-accent transition-colors"
                  >
                    {exp.org}
                  </a>
                  {' · '}{exp.location}
                </p>

                <ul className="exp-bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </SectionReveal>
    </div>
  </section>
);

export default Experience;
