import { CategoryItemProps } from "@/types/category-item.types"
import Image from "next/image"
import { Typography } from "./ui/typography"

export const CategoryItem = ({ img, alt, title }: CategoryItemProps) => {
    return (
        <div className="lg:w-[38rem] w-full h-[20rem] relative bg-gray-600 mx-4 lg:mx-0 rounded-lg">
            <Image 
                src={img} 
                alt={`${alt}`} 
                width={280} 
                height={520} 
                className="h-full absolute -right-10 bottom-0 opacity-20 lg:opacity-50" 
            />
            
            <div className=" pl-4 lg:pl-8 pt-4 lg:pt-8">
                <Typography as="h3" className="lg:w-[25rem] text-white text-2xl font-bold">{title}</Typography>
            </div>
        </div>
    )
}