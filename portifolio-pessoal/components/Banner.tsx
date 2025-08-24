import Image from "next/image";

export function Banner() {
    return (
        <>
            <section
                className="relative h-[600px] w-full max-w-[1280px] mx-auto rounded-b-lg
                            bg-[url('/img/banner1.jpg')] bg-cover bg-center
                            before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/90 before:via-black/0 before:to-transparent
                            flex flex-col justify-end"
                >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/0 to-black/0" />

                <Image
                    src="https://github.com/j-breno.png"
                    alt="Foto de perfil"
                    width={250}
                    height={250}
                    className="absolute top-6 left-6 w-[150px] sm:w-[200px] md:w-[250px] h-[150px] sm:h-[200px] md:h-[250px] rounded-full border-2 border-[#FFAE00] shadow-lg"
                />

                <div className="p-4 sm:p-6 pb-76 sm:pb-40">
                    <h2 className="font-bold text-black sm:text-white text-[28px] sm:text-[40px] md:text-[50px]">Programador Fullstack</h2>
                    <h2 className="font-bold text-black sm:text-white text-[28px] sm:text-[40px] md:text-[50px]">João Breno</h2>
                </div>
                </section>
        </>
    ) 
}