import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Projects() {
    return(
        <>
            <section id="projects" className="w-full">
                  <div className="h-[60px] flex items-center px-4 bg-gradient-to-r from-black/95 to-transparent">
                    <h2 className="text-4xl font-bold text-white">Projetos</h2>
                  </div>
                 <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4">
                    {/* Card 1 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="bg-gray-700 rounded-lg h-[450px] flex flex-col justify-between shadow-lg bg-[url('/img/banner1.jpg')] bg-cover bg-right cursor-pointer transform transition-transform hover:scale-[1.02] overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <p className="text-2xl font-bold text-white">DSCommerce</p>
                                </div>
                            </div>
                        </DialogTrigger>

                        <DialogContent className="max-w-3xl bg-white rounded-lg">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-gray-800">DSCommerce</DialogTitle>
                            </DialogHeader>

                            <div className="mt-4">
                                <img src="/img/banner1.jpg" alt="DSCommerce" className="w-full rounded-lg mb-4" />
                                <p className="text-gray-700">
                                    <strong>E-commerce Fullstack</strong> <br />
                                    Projeto de e-commerce completo desenvolvido com <strong>React, TypeScript, HTML, CSS, Java, Spring Boot</strong> e <strong>PostgreSQL</strong>. Possui login e autenticação, CRUD completo de produtos e usuários, carrinho de compras funcional e integração entre frontend e backend. O sistema foi construído com foco em boa arquitetura, usabilidade e performance.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
                                <a
                                    href="https://github.com/J-Breno/reactJs_nelio/tree/main/projeto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 border-2 border-purple-800 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-800 hover:text-white transition text-center font-medium"
                                >
                                    Código no GitHub
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 border-2 border-sky-800 text-sky-800 px-4 py-2 rounded-lg hover:bg-sky-800 hover:text-white transition text-center font-medium"
                                >
                                    Ver Aplicação
                                </a>
                            </div>
                        </DialogContent>
                    </Dialog>
                    
                    {/* Card 2 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="bg-gray-700 rounded-lg h-[450px] flex flex-col justify-between shadow-lg bg-[url('/img/banner1.jpg')] bg-cover bg-right cursor-pointer transform transition-transform hover:scale-[1.02] overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <p className="text-2xl font-bold text-white">DSCommerce</p>
                                </div>
                            </div>
                        </DialogTrigger>

                        <DialogContent className="max-w-3xl bg-white rounded-lg">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-gray-800">DSCommerce</DialogTitle>
                            </DialogHeader>

                            <div className="mt-4">
                                <img src="/img/banner1.jpg" alt="DSCommerce" className="w-full rounded-lg mb-4" />
                                <p className="text-gray-700">
                                    <strong>E-commerce Fullstack</strong> <br />
                                    Projeto de e-commerce completo desenvolvido com <strong>React, TypeScript, HTML, CSS, Java, Spring Boot</strong> e <strong>PostgreSQL</strong>. Possui login e autenticação, CRUD completo de produtos e usuários, carrinho de compras funcional e integração entre frontend e backend. O sistema foi construído com foco em boa arquitetura, usabilidade e performance.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
                                <a
                                    href="https://github.com/J-Breno/reactJs_nelio/tree/main/projeto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 border-2 border-purple-800 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-800 hover:text-white transition text-center font-medium"
                                >
                                    Código no GitHub
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 border-2 border-sky-800 text-sky-800 px-4 py-2 rounded-lg hover:bg-sky-800 hover:text-white transition text-center font-medium"
                                >
                                    Ver Aplicação
                                </a>
                            </div>
                        </DialogContent>
                    </Dialog>
                    
                    {/* Card 3 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="bg-gray-700 rounded-lg h-[450px] flex flex-col justify-between shadow-lg bg-[url('/img/banner1.jpg')] bg-cover bg-right cursor-pointer transform transition-transform hover:scale-[1.02] overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <p className="text-2xl font-bold text-white">DSCommerce</p>
                                </div>
                            </div>
                        </DialogTrigger>

                        <DialogContent className="max-w-3xl bg-white rounded-lg">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-gray-800">DSCommerce</DialogTitle>
                            </DialogHeader>

                            <div className="mt-4">
                                <img src="/img/banner1.jpg" alt="DSCommerce" className="w-full rounded-lg mb-4" />
                                <p className="text-gray-700">
                                    <strong>E-commerce Fullstack</strong> <br />
                                    Projeto de e-commerce completo desenvolvido com <strong>React, TypeScript, HTML, CSS, Java, Spring Boot</strong> e <strong>PostgreSQL</strong>. Possui login e autenticação, CRUD completo de produtos e usuários, carrinho de compras funcional e integração entre frontend e backend. O sistema foi construído com foco em boa arquitetura, usabilidade e performance.
                                </p>
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
                                <a
                                    href="https://github.com/J-Breno/reactJs_nelio/tree/main/projeto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 border-2 border-purple-800 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-800 hover:text-white transition text-center font-medium"
                                >
                                    Código no GitHub
                                </a>

                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 border-2 border-sky-800 text-sky-800 px-4 py-2 rounded-lg hover:bg-sky-800 hover:text-white transition text-center font-medium"
                                >
                                    Ver Aplicação
                                </a>
                            </div>
                        </DialogContent>
                    </Dialog>
                    
                    
                </div>
            </section>
        </>
    )
}