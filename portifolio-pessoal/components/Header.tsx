export default function Header() {
  return (
    <header className="h-[60px] w-full bg-gradient-to-r from-[#2C2E45] to-[#545D70] flex items-center justify-center rounded-t-lg">
      <nav>
        <ul className="flex gap-8 text-white font-semibold">
          {["HOME", "HABILIDADES", "SOBRE", "PROJETOS", "CONTATO"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-[#FFAE00] px-1"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#FFAE00] transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
