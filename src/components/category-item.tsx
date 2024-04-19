import { CategoryItemProps } from "@/types/category-item.types"
import Image from "next/image"
import { Typography } from "./ui/typography"
import { Button } from "./ui/button"

export const CategoryItem = ({img, alt, title}: CategoryItemProps) => {
    return (
        <div className="w-[31rem] h-[20rem] relative group">
            <Image 
                src={img} 
                alt={`${alt}`} 
                width={500} 
                height={185} 
                className=" h-full bg-gray-600" 
            />

            <Button
                as="link" 
                href="/shop" 
                className={`hidden px-[4rem] absolute left-[30%] top-[40%] origin-center capitalize 
                    text-white text-xl group-hover:inline-block`}
            >
                {title}
            </Button>
        </div>
    )
}