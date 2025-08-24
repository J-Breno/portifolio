import { AtomIcon, CoffeeIcon, DatabaseIcon, FileCssIcon, FileHtmlIcon, FileJsIcon, FileTsIcon, WindIcon } from "@phosphor-icons/react";


export default function Skills() {
    return (
        <>
            <section id="skills" className="w-full">
                  <div className="h-[60px] flex items-center px-4 bg-gradient-to-r from-black/95 to-transparent">
                    <h2 className="text-4xl font-bold text-white">Habilidades</h2>
                  </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 py-6">
                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <FileHtmlIcon weight="regular" size={50} className="text-white group-hover:text-red-600 transition-colors duration-300 cursor-pointer"></FileHtmlIcon>
                        <span className="text-white font-semibold">HTML</span>
                        </div>

                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <FileCssIcon weight="regular" size={50} className="text-white group-hover:text-blue-600 transition-colors duration-300 cursor-pointer"></FileCssIcon>
                            <span className="text-white font-semibold">CSS</span>
                        </div>

                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <FileJsIcon weight="regular" size={50} className="text-white group-hover:text-yellow-400 transition-colors duration-300 cursor-pointer"></FileJsIcon>
                            <span className="text-white font-semibold">JavaScript</span>
                        </div>

                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <FileTsIcon weight="regular" size={50} className="text-white group-hover:text-blue-400 transition-colors duration-300 cursor-pointer"></FileTsIcon>
                            <span className="text-white font-semibold">TypeScript</span>
                        </div>

                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <WindIcon weight="regular" size={50} className="text-white group-hover:text-sky-400 transition-colors duration-300 cursor-pointer"></WindIcon>
                            <span className="text-white font-semibold">Tailwind</span>
                        </div>

                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <AtomIcon weight="regular" size={50} className="text-white group-hover:text-purple-600 transition-colors duration-300 cursor-pointer"></AtomIcon>
                            <span className="text-white font-semibold">React / Next</span>
                        </div>

                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <DatabaseIcon weight="regular" size={50} className="text-white group-hover:text-green-500 transition-colors duration-300 cursor-pointer"></DatabaseIcon>
                            <span className="text-white font-semibold">Node / Nest</span>
                        </div>

                        <div className="group flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-inner shadow-black/50 hover:shadow-[inset_0_0_15px_2px_rgba(255,255,255,0.2)] transition-shadow duration-300 cursor-pointer">
                            <CoffeeIcon weight="regular" size={50} className="text-white group-hover:text-red-500 transition-colors duration-300 cursor-pointer"></CoffeeIcon>
                            <span className="text-white font-semibold">Java / Spring</span>
                        </div>
                    </div>
                </section>
        </>
    )
}