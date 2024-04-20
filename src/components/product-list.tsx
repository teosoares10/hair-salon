import { ProductItem } from "./product-item"
import { Typography } from "./ui/typography"

const data = [
    {
      "nome": "Peruca Longa Lisa",
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Curta Cacheada",
      "imagem": "/img/sensationnel-dashly-synthetic-lace-front-wig-lace-unit.webp"
    },
    {
      "nome": "Peruca Bob",
      "imagem": "/img/sensationnel-synthetic-kinky-edge-13x6-hd-lace-wig-kinky-blow-out-1.webp"
    },
    {
      "nome": "Peruca Dreads",
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Rabo de Cavalo",
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Ombré",
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Cosplay",
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Masculina",
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    // {
    //   "nome": "Peruca Infantil",
    //   "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    // }
  ]

export const ProductList = () => {
    return (
        <section className="my-8 py-4 bg-gray-600">
            <Typography 
                as="h2" 
                className={`capitalize text-4xl text-center text-white my-4 font-bold`}
            >
                novidades
            </Typography>
            <ul className="mx-auto lg:w-[65rem] flex flex-wrap gap-8 justify-center items-center text-white">
                {data.map((wig, i) => (
                    <ProductItem
                        key={i} 
                        img={wig.imagem}
                        title={wig.nome}
                        href=""
                    />
                ))}
            </ul>
        </section>
    )
}