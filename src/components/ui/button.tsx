import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/button.types";
import Link from "next/link";

export const Button = ({ as, children, href, className }: ButtonProps) => {
    switch (as) {
        case "link":
            return (
                <Link 
                    href={`${href}`}
                    className={
                        cn(`bg-[#fcbcb2] text-white uppercase hover:bg-[rgba(252,188,178,.9)] 
                            px-4 py-2`, 
                            className
                        )
                    }
                >
                    {children}
                </Link>
            );

        default:
            return (
                <button 
                    className={
                        cn(`bg-[#fcbcb2] text-white uppercase hover:bg-[rgba(252,188,178,.9) 
                            px-4 py-2`, 
                            className
                        )
                    }
                >
                    {children}
                </button>
            )
    } 
}