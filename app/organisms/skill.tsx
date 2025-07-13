import { useState } from 'react';

const skills = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg' },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg' },
  
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vite.svg' },
  { name: 'Golang', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/go.svg' },
];

const SkillGrid = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const toggleSkill = (name: string) => {
    if (activeSkill === name) {
      setActiveSkill(null);
    } else {
      setActiveSkill(name);
    }
  };

  return (
    <section className="w-full px-6 py-12 bg-transparent">
      <h2 className="text-white text-4xl font-bold text-center mb-12">My Tech Stack</h2>

      <div
        className={`
          grid
          justify-center
          gap-5
          grid-cols-4
          max-w-[600px] mx-auto
        `}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            onClick={() => toggleSkill(skill.name)}
            className={`
               bg-gradient-to-r from-gray-950 via-gray-900 to-gray-900
              text-white font-semibold rounded-lg
              border border-white/20
              shadow-[0_0_10px_rgba(255,255,255,0.15),inset_0_0_8px_rgba(255,255,255,0.1)]
              backdrop-blur-sm
              relative overflow-hidden flex justify-center items-center py-4
              cursor-pointer
              transition-transform duration-300
              hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
            `}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-10 opacity-90 hover:opacity-100 transition filter invert"
            />

            {/* Popup info saat klik */}
            {activeSkill === skill.name && (
              <div
                className={`
                  absolute top-0 left-1/2 -translate-x-1/2
                  mt-[-2.5rem]
                  px-3 py-1 rounded-md
                  bg-white bg-opacity-10
                  backdrop-blur-md
                  border border-white/30
                  text-white text-sm font-semibold
                  shadow-lg
                  pointer-events-none
                  select-none
                  whitespace-nowrap
                  z-10
                  animate-fadeIn
                `}
              >
                {skill.name}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default SkillGrid;  