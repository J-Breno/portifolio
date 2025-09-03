import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  bgPosition?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Devsbook",
      image: "/img/devsbook.png",
      description: "Projeto Devsbook completo desenvolvido. Ele é uma rede social que possui login e autenticação, CRUD completo, você pode fazer upload de images, configurações de usuário, comentários, likes em posts.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/J-Breno/php_curso/tree/main/projeto/devsbook",
      liveUrl: "https://jbrenojdev.com.br/app/public/login.php",
      bgPosition: "bg-left"
    },
    {
      id: 2,
      title: "Dashgo",
      image: "/img/dashgo.png",
      description: "Projeto Dashgo completo desenvolvido. Ele é uma dashboard com intuito de desenvolver um projeto em nextjs para treinar responsividade, designer e o próprio nextjs.",
      technologies: ["HTML", "TypeScript", "Next.js", "Chakra UI"],
      githubUrl: "https://github.com/J-Breno/nextjs/tree/main/04-dashgo",
      liveUrl: "https://dashgo-brenodev.netlify.app/",
      bgPosition: "bg-left"
    },
    {
      id: 3,
      title: "Shop Base",
      image: "/img/shop-base.png",
      description: "Projeto Shop Base completo desenvolvido. Ele é uma loja que vende camisas com intuito de desenvolver um projeto em nextjs para treinar responsividade, designer e o próprio nextjs.",
      technologies: ["HTML", "TypeScript", "Next.js", "CSS Modules"],
      githubUrl: "https://github.com/J-Breno/nextjs/tree/main/01-ignite-shop",
      liveUrl: "https://shopbrenodev.netlify.app/",
      bgPosition: "bg-center"
    }
  ];

  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="w-full py-8">
      <div className="h-[60px] flex items-center px-4 bg-gradient-to-r from-black/95 to-transparent mb-8">
        <h2 className="text-4xl font-bold text-white">Projetos</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <div 
                className="group relative bg-gray-800 rounded-xl h-[380px] flex flex-col justify-end overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                onClick={() => openProjectDialog(project)}
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: project.bgPosition || 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-500"></div>
                
                <div className="relative z-10 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-300 text-sm mb-3">Clique para ver detalhes</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/30 text-gray-200 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>

            {selectedProject && (
              <DialogContent className="max-w-4xl bg-gray-900 border border-gray-700 rounded-xl text-white overflow-hidden">
                <DialogHeader className="flex flex-row items-center justify-between p-6 border-b border-gray-700">
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <button 
                    onClick={closeProjectDialog}
                    className="p-1 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    {/* SVG de fechar (X) */}
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </DialogHeader>

                <div className="p-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full rounded-lg mb-6 shadow-lg"
                  />
                  
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-purple-400">Tecnologias utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      <svg 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Ver código
                    </a>

                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      {/* SVG de link externo */}
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver aplicação
                    </a>
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </section>
  );
}