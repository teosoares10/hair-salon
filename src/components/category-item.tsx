import { CategoryItemProps } from "@/types/category-item.types"
import Image from "next/image"
import { Typography } from "./ui/typography"
import { Button } from "./ui/button"

export const CategoryItem = ({img, alt, title, description}: CategoryItemProps) => {
    return (
        <div className="w-[38rem] h-[20rem] relative bg-gray-600">
            <Image 
                src={img} 
                alt={`${alt}`} 
                width={280} 
                height={520} 
                className="h-full absolute -right-10 bottom-0" 
            />
            
            <div className="pl-8 pt-8">
                <Typography as="h3" className="w-[25rem] text-white text-2xl font-bold">{title}</Typography>
                <Typography className="w-[24rem] py-4">{description}</Typography>
                <Button
                    as="link" 
                    href="/shop" 
                    className="absolute first-letter:uppercase lowercase text-white text-lg px-8"
                >
                    ir a loja
                </Button>
            </div>
        </div>
    )
}