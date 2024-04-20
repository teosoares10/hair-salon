import { ProductItemProps } from "@/types/product-item.types"
import Image from "next/image"
import Link from "next/link"
import { Typography } from "./ui/typography"

export const ProductItem = ({ title, img, alt, href }: ProductItemProps) => {
    return (
        <Link href={href} className="inline-block w-[14rem] group">
            <Image src={img} alt={`${alt}`} width={155} height={255} className="w-full h-full" />
            <Typography as="h4" className="my-4 font-bold group-hover:underline">{title}</Typography>
        </Link>
    )
}