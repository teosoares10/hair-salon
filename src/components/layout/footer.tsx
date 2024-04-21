import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react"
import { Typography } from "../ui/typography"

export const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-white px-4 py-8">
            <div className="flex flex-wrap text-center lg:text-left justify-center lg:justify-between space-y-8 lg:space-y-0">
                <section className="w-[20rem] space-y-4">
                    <Typography as="h3" className="text-xl font-bold tracking-[1rem] mb-4">
                        <span className="inline-flex tracking-normal mr-4 px-2 border capitalize">c</span>
                        urly
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo minima, enim minus aliquid eligendi eos ab distinctio molestias nemo officiis vero error similique fugit.
                    </Typography>
                </section>

                <section className="w-[20rem] px-4 space-y-4">
                    <Typography as="h3" className="uppercase text-xl font-bold tracking-widest mb-4">
                        contactos
                    </Typography>
                    <div className="flex items-start justify-center gap-2">
                        <MapPinIcon size={34} />
                        <Typography>Kero Benguela, Av Gen. João de Almeida, Benguela, Angola</Typography>
                    </div>
                    <div className="flex items-center justify-center lg:justify-normal gap-2">
                        <MailIcon />
                        <Typography>teosoares10@gmail.com</Typography>
                    </div>

                    <div className="flex items-center justify-center lg:justify-normal gap-2">
                        <PhoneCallIcon />
                        <Typography>+244 957 704 613</Typography>
                    </div>
                </section>

                <section className="w-[14rem]">
                    <Typography as="h3" className="uppercase text-xl font-bold tracking-widest mb-4">
                        info
                    </Typography>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Typography className="capitalize">dias uteis</Typography>
                            <Typography className="uppercase">9am - 9pm</Typography>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography className="capitalize">sábado</Typography>
                            <Typography className="uppercase">10am - 8pm</Typography>
                        </div>
                        <div className="flex justify-between items-center">
                            <Typography className="capitalize">domingo</Typography>
                            <Typography className="capitalize">Fechado</Typography>
                        </div>
                    </div>
                </section>
            </div>
            <Typography className="capitalize text-center mt-16">
                &copy; 2024 teodoro pedro. todos direitos reservados
            </Typography>
        </footer>
    )
}