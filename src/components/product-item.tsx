import { ProductItemProps } from "@/types/product-item.types"
import Image from "next/image"
import Link from "next/link"

export const ProductItem = ({ img, alt, href }: ProductItemProps) => {
    return (
        <section className="w-[16rem] relative">
            <Image src={img} alt={`${alt}`} width={555} height={255} className="w-[20rem] h-[24rem]" />
        </section>
    )
}