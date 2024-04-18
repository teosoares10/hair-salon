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
                        cn(`bg-[#fcbcb2] text-white border-[#fcbcb2] border-2 uppercase hover:bg-transparent 
                            hover:text-[#fcbcb2] px-4 py-2`, 
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
                        cn(`bg-[#fcbcb2] text-white border-[#fcbcb2] border-2 uppercase hover:bg-transparent 
                            hover:text-[#fcbcb2] px-4 py-2`, 
                            className
                        )
                    }
                >
                    {children}
                </button>
            )
    } 
}