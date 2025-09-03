import { useState } from "react";
import { FileHtmlIcon, FileCssIcon, FileJsIcon, FileTsIcon, WindIcon, AtomIcon, DatabaseIcon, CoffeeIcon, CodeIcon } from "@phosphor-icons/react";

export default function Skills() {
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleTouch = (index: number) => {
    setTouchedIndex(touchedIndex === index ? null : index);
  };

  const skills = [
    { name: "HTML", icon: FileHtmlIcon, color: "#dc2626" },
    { name: "CSS", icon: FileCssIcon, color: "#2563eb" },
    { name: "JavaScript", icon: FileJsIcon, color: "#facc15" },
    { name: "TypeScript", icon: FileTsIcon, color: "#60a5fa" },
    { name: "Tailwind", icon: WindIcon, color: "#38bdf8" },
    { name: "React / Next", icon: AtomIcon, color: "#5833ea" },
    { name: "Node / Nest", icon: DatabaseIcon, color: "#22c55e" },
    { name: "PHP", icon: CodeIcon, color: "#8400ff" },
  ];

  return (
    <section id="skills" className="w-full">
      <div className="h-[60px] flex items-center px-4 bg-gradient-to-r from-black/95 to-transparent">
        <h2 className="text-4xl font-bold text-white">Habilidades</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 py-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const isTouched = touchedIndex === index;
          const isHovered = hoveredIndex === index;
          const isActive = isHovered || isTouched;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => handleTouch(index)}
              className={`group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 
                          hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)]
                          ${isTouched ? "shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)]" : ""} 
                          transition-all duration-300 cursor-pointer`}
            >
              <Icon
                weight="regular"
                size={50}
                className="text-white transition-colors duration-300 cursor-pointer"
                style={{ color: isActive ? skill.color : '#ffffff' }}
              />
              <span className="text-white font-semibold">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}