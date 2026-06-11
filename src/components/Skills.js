import { skillCategories } from '../data/skills';
import SectionLabel from './SectionLabel';
import SectionReveal from './SectionReveal';

const Skills = () => (
  <section id="skills" className="py-20 sm:py-28">
    <div className="wrap">
      <SectionReveal>
        <SectionLabel
          index="02"
          title="Skills"
          subtitle="Languages, frameworks, and tools."
          className="animate-in"
        />

        <div className="skills-bands">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="skills-band animate-in"
              style={{ '--reveal-delay': `${110 + i * 85}ms` }}
            >
              <h3 className="skills-band-title">{cat.name}</h3>
              <ul className="skills-tiles">
                {cat.skills.map((s) => (
                  <li
                    key={s.name}
                    className="skill-tile"
                    style={{ '--skill-color': s.color }}
                  >
                    <span className="skill-tile-icon">
                      <i className={s.icon} style={{ color: s.color }} />
                    </span>
                    <span className="skill-tile-name">{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default Skills;
