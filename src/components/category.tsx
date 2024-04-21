import Image from "next/image"
import { Typography } from "./ui/typography"

export const Category = () => {
    return (
        <section className="flex flex-wrap items-center justify-center gap-8 mt-8 lg:mx-8">
            <Image 
                src="/img/banner.png" 
                alt="" 
                width={540} 
                height={280} 
                className="lg:w-[25rem] lg:h-[30rem] w-[20rem] h-full mx-4 -mt-28 lg:mt-0 bg-[#fcbcb2] rounded-3xl order-1 lg:order-none" 
            />
            <div className="lg:space-y-4 lg:w-[40rem] w-full h-[24rem] lg:h-auto mx-4 lg:mx-0 bg-zinc-800 py-8 px-4 lg:px-16 lg:-ml-24 text-center lg:text-left">
                <Typography 
                    as="h3" 
                    className="text-white lg:text-4xl text-2xl font-bold lg:pt-2"
                >
                    Transforme seu visual com as nossas perucas!
                </Typography>

                <Typography className="text-lg mt-4 lg:mt-0 text-white">
                    Descubra uma variedade incrível de perucas de alta qualidade para todos os estilos e ocasiões. Encontre a peruca perfeita para você e surpreenda a todos com um novo visual!
                </Typography>
            </div>
            
        </section>
    )
}