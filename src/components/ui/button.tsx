import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types/button.types";
import Link from "next/link";

export const Button = ({ as, children, href, className }: ButtonProps) => {
    switch (as) {
        case "link":
            return (
                <button 
                    className={
                        cn("border-[#fcbcb2] uppercase hover:bg-transparent text-[#fcbcb2]", className)
                    }
                >
                    {children}
                </button>
            );

        default:
           <Link 
                href={`${href}`}
                className={
                    cn("border-[#fcbcb2] uppercase hover:bg-transparent text-[#fcbcb2]", className)
                }
            >
                {children}
            </Link>;
    } 
}