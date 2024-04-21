import { ProductItemProps } from "@/types/product-item.types"
import Image from "next/image"
import Link from "next/link"

export const ProductItem = ({ img, alt, href }: ProductItemProps) => {
    return (
        <Link href={href} className="inline-block w-[16rem]">
            <Image src={img} alt={`${alt}`} width={555} height={255} className="size-[16rem] rounded-3xl" />
        </Link>
    )
}