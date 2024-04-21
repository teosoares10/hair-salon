import { ProductItemProps } from "@/types/product-item.types"
import Image from "next/image"
import { Button } from "./ui/button"

export const ProductItem = ({ img, alt, href }: ProductItemProps) => {
    return (
        <section className="w-[16rem] relative group">
            <Image src={img} alt={`${alt}`} width={555} height={255} className="w-[20rem] h-[23rem]" />
            <div className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full">
                <div className="flex justify-center items-center w-[14rem] h-[20rem] bg-zinc-900">
                    <Button as="link" href={href} className="uppercase text-gray-600 rounded-xl">ver galeria</Button>
                </div>
            </div>
        </section>
    )
}