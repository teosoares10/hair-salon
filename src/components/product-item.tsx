import { ProductItemProps } from "@/types/product-item.types"
import Image from "next/image"
import Link from "next/link"
import { Typography } from "./ui/typography"

export const ProductItem = ({ title, img, alt, href }: ProductItemProps) => {
    return (
        <Link href={href} className="inline-block w-[24rem]">
            <Image src={img} alt={`${alt}`} width={555} height={255} className="size-[16rem] rounded-3xl" />
            <Typography as="h4" className="my-4 font-bold">{title}</Typography>
        </Link>
    )
}