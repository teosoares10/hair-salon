import { ProductItem } from "./product-item"
import { Typography } from "./ui/typography"

const data = [
    {
      "nome": "Peruca Longa Lisa",
      "imagem": "/img/gallery-1.webp"
    },
    {
      "nome": "Peruca Curta Cacheada",
      "imagem": "/img/gallery-5.jpg"
    },
    {
      "nome": "Peruca Bob",
      "imagem": "/img/gallery-8.webp"
    },
    {
      "nome": "Peruca Dreads",
      "imagem": "/img/gallery-2.jpg"
    },
    {
      "nome": "Peruca Rabo de Cavalo",
      "imagem": "/img/gallery-10.jpg"
    },
    {
      "nome": "Peruca Ombré",
      "imagem": "/img/gallery-13.jpg"
    },
    {
      "nome": "Peruca Cosplay",
      "imagem": "/img/gallery-7.webp"
    },
    {
      "nome": "Peruca Masculina",
      "imagem": "/img/gallery-11.webp"
    },
    {
      "nome": "Peruca Infantil",
      "imagem": "/img/gallery-1.webp"
    }
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
            <ul className="mx-4 lg:mx-auto lg:w-[85rem] flex flex-wrap gap-8 justify-center items-center text-white text-center">
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