import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full">
      <div className="h-[60px] flex items-center px-4 bg-gradient-to-r from-black/95 to-transparent">
        <h2 className="text-4xl font-bold text-white">Sobre mim</h2>
      </div>

<div className="px-4 sm:px-6 md:px-6 py-8 space-y-6">
  <p className="text-[18px] sm:text-[20px] md:text-[22px] text-white leading-relaxed font-light">
          Olá, eu sou o Breno, <strong className="font-semibold text-[#FFAE00]">programador fullstack</strong> apaixonado por tecnologia e pela criação de soluções inteligentes. Gosto de desenvolver projetos completos que impactem positivamente a experiência do usuário.
        </p>

          <p className="text-[18px] sm:text-[20px] md:text-[22px] text-white leading-relaxed font-light">
          Ao longo da minha trajetória, trabalhei em <strong className="font-semibold text-[#FFAE00]">projetos como e-commerces, sistemas de produtividade</strong> e <strong className="font-semibold text-[#FFAE00]">aplicações completas</strong>, consolidando minhas habilidades práticas e aprendendo a lidar com os desafios do desenvolvimento de software.
        </p>

          <p className="text-[18px] sm:text-[20px] md:text-[22px] text-white leading-relaxed font-light">
        Tive experiência como <strong className="font-semibold text-[#FFAE00]">estagiário em análise de dados</strong> e atualmente atuo como <strong className="font-semibold text-[#FFAE00]">analista de sistemas</strong> em uma empresa de redes de computadores. Estou pronto para contribuir com soluções inovadoras e agregar valor desde o primeiro dia em novos projetos de desenvolvimento.
        </p>
        <div className="flex gap-3">
            <a
            href="https://github.com/J-Breno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
                 src="img/contact/github.svg"
                alt="Logo do github"
                width={50}
                height={50}
            /></a>
             <a
            href="https://www.linkedin.com/in/jo%C3%A3o-breno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
                 src="img/contact/linkedin.svg"
                alt="Logo do Linkedin"
                width={50}
                height={50}
            /></a>
             <a
            href="https://www.instagram.com/jbrenojj?igsh=MTdzcDFzczVvYmdveA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
                 src="img/contact/instagram.svg"
                alt="Logo do Instagram"
                width={50}
                height={50}
            />
            </a>
        </div>
      </div>
    </section>
  );
}
