'use client';

import FadeUpSection from './FadeUpSection';

const technologies = [
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', color: '#FFFFFF' },
  { name: 'TypeScript', category: 'Frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06B6D4' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'PostgreSQL', category: 'Backend', color: '#4169E1' },
  { name: 'Express', category: 'Backend', color: '#FFFFFF' },
  { name: 'MongoDB', category: 'Backend', color: '#47A248' },
  { name: 'Git', category: 'Tools', color: '#F05032' },
  { name: 'GitHub', category: 'Tools', color: '#FFFFFF' },
  { name: 'Vercel', category: 'Tools', color: '#FFFFFF' },
  { name: 'Figma', category: 'Tools', color: '#F24E1E' },
];

const TechLogo = ({ name, color }: { name: string; color: string }) => {
  const logos: { [key: string]: JSX.Element } = {
    'React': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <circle cx="12" cy="12" r="2" fill={color} />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke={color} strokeWidth="1.5" fill="none" />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
    'Next.js': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M11.5 0c-.157 0-.314.003-.47.009A11.5 11.5 0 004.799 20.6L16.05 5.428V18.5h1.5V3.25c0-.157-.003-.314-.009-.47A11.5 11.5 0 0011.5 0z" />
        <path d="M11.5 23c.157 0 .314-.003.47-.009A11.5 11.5 0 0018.7 3.4L7.45 18.572V5.5h-1.5v15.25c0 .157.003.314.009.47A11.5 11.5 0 0011.5 23z" />
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <rect x="3" y="3" width="18" height="18" rx="2" fill={color} />
        <path d="M13 8v2h2.5v6h2V10H20V8h-7zM8 14.5V16h4v-1.5H8zM8 12V14h4v-2H8zM8 10V12h4v-2H8z" fill="white" />
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill={color} />
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M11.998 2a1.8 1.8 0 00-.9.248L3.35 7.25a1.8 1.8 0 00-.9 1.557v9.988a1.8 1.8 0 00.9 1.557l7.748 5.001a1.8 1.8 0 001.8 0l7.748-5.001a1.8 1.8 0 00.9-1.557V8.807a1.8 1.8 0 00-.9-1.557l-7.748-5a1.8 1.8 0 00-.9-.25z" />
      </svg>
    ),
    'PostgreSQL': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M17.128 3.362c-1.356-.23-2.482.047-3.414.742-.932.695-1.628 1.801-2.077 3.139-.45 1.338-.603 2.848-.457 4.296.146 1.448.59 2.814 1.262 3.883.672 1.07 1.584 1.865 2.6 2.26 1.016.395 2.148.394 3.222-.003 1.074-.398 2.102-1.196 2.912-2.262.81-1.066 1.414-2.428 1.712-3.875.298-1.447.29-2.957-.024-4.295-.314-1.338-.925-2.446-1.742-3.145-.817-.699-1.837-1.036-2.994-.74z" />
      </svg>
    ),
    'Express': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    ),
    'MongoDB': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.79-3.567 4.29-11.375z" />
      </svg>
    ),
    'Git': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.913 3.035 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-2.02L12.78 8.82v6.749c.131.066.252.158.36.274a1.838 1.838 0 010 2.596 1.833 1.833 0 01-2.596 0 1.838 1.838 0 01.402-2.877V8.83a1.835 1.835 0 01-.996-2.406l-2.72-2.72L.452 10.497a1.55 1.55 0 000 2.19l10.48 10.477a1.55 1.55 0 002.186 0l10.43-10.43a1.55 1.55 0 00-.002-2.19" />
      </svg>
    ),
    'GitHub': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    'Vercel': (
      <svg viewBox="0 0 24 24" fill={color} className="w-12 h-12">
        <path d="M12 2L2 20h20L12 2z" />
      </svg>
    ),
    'Figma': (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M8 2h4v4H8a2 2 0 110-4z" fill="#F24E1E" />
        <path d="M12 2h4a2 2 0 110 4h-4V2z" fill="#FF7262" />
        <path d="M16 8a2 2 0 11-4 0 2 2 0 014 0z" fill="#A259FF" />
        <path d="M8 8h4v4H8a2 2 0 110-4z" fill="#1ABCFE" />
        <path d="M8 14a2 2 0 104 0h-4z" fill="#0ACF83" />
      </svg>
    ),
  };

  return logos[name] || <div className="w-12 h-12 bg-light-gray rounded" />;
};

export default function TechStackSection() {
  return (
    <section id="tech" className="section-padding relative overflow-hidden bg-space-navy">

      <div className="container relative z-10">
        <FadeUpSection className="text-center mb-20">
          <h2 className="heading-2 text-glow mb-4">Technology Stack</h2>
          <p className="text-lg text-soft-gray max-w-2xl mx-auto">
            Modern frameworks and tools
          </p>
        </FadeUpSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <FadeUpSection
              key={tech.name}
              delay={index * 0.05}
              className="flex flex-col items-center gap-4 group cursor-pointer"
              style={{
                animation: `float ${4 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
              role="article"
              aria-label={`${tech.name} - ${tech.category} technology`}
            >
              <div className="glass w-[100px] h-[100px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-calm-blue/50 group-hover:shadow-[0_8px_24px_rgba(74,144,226,0.2)]" aria-hidden="true">
                <TechLogo name={tech.name} color={tech.color} />
              </div>
              <span className="text-sm text-soft-gray text-center group-hover:text-calm-blue transition-colors">
                {tech.name}
              </span>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
