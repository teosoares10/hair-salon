import { CategoryItemProps } from "@/types/category-item.types"
import Image from "next/image"
import { Typography } from "./ui/typography"

export const CategoryItem = ({ img, alt, title }: CategoryItemProps) => {
    return (
        <div className="lg:w-[20rem] w-full h-[26rem] bg-gray-600 mx-4 lg:mx-0 rounded-3xl">
            <Image 
                src={img} 
                alt={`${alt}`} 
                width={280} 
                height={520} 
                className="h-full w-full" 
            />
            <Typography as="h3" className="text-center text-gray-600 text-2xl font-bold lg:pt-2">{title}</Typography>
        </div>
    )
}