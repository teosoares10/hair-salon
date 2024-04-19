import Link from "next/link"
import { Typography } from "../ui/typography"
import { PhoneCall, MapPin } from 'lucide-react'
import React from "react"
import Image from "next/image"

export const Navbar = () => {
    return (
        <nav>
            <section className="flex justify-between items-center py-2 px-4">
                <div className="flex items-center gap-2">
                    <MapPin />
                    <Typography as="span">
                        Kero Benguela, Av Gen. João de Almeida, Benguela, Angola
                    </Typography>
                </div>
                <div className="flex gap-4 items-center">
                    <PhoneCall />
                    <Typography as="span" className="text-lg tracking-widest">957704613</Typography>
                </div>
            </section>

            <section className="flex justify-between items-center bg-gray-600 p-4 text-white">
                <Link href="/">
                    <Image src="/img/logo.png" alt="" className="" width={50} height={50} />
                </Link>
                <div className="space-x-8 text-md">
                    <Link href="/">Inicio</Link>
                    <Link href="/about">Sobre</Link>
                    <Link href="/contact">Contato</Link>
                </div>
            </section>
        </nav>
    )
}