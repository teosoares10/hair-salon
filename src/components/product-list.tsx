import { ProductItem } from "./product-item"
import { Typography } from "./ui/typography"

const data = [
    {
      "nome": "Peruca Longa Lisa",
      "preco": 120.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Curta Cacheada",
      "preco": 80.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Bob",
      "preco": 150.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Dreads",
      "preco": 100.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Rabo de Cavalo",
      "preco": 90.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Ombré",
      "preco": 180.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Cosplay",
      "preco": 200.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    {
      "nome": "Peruca Masculina",
      "preco": 130.00,
      "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    },
    // {
    //   "nome": "Peruca Infantil",
    //   "preco": 60.00,
    //   "imagem": "/img/outre-synthetic-hd-transparent-lace-front-wig-hudson.webp"
    // }
  ]

export const ProductList = () => {
    return (
        <section className="my-28 py-4 bg-gray-600">
            <Typography 
                as="h2" 
                className={`capitalize text-4xl text-center text-white my-4 font-bold`}
            >
                novidades
            </Typography>
            <ul className="mx-auto w-[65rem] flex flex-wrap gap-8 justify-center items-center text-white">
                {data.map((wig, i) => (
                    <ProductItem
                        key={i} 
                        img={wig.imagem}
                        price={wig.preco}
                        title={wig.nome}
                        href=""
                    />
                ))}
            </ul>
        </section>
    )
}