import { CategoryItem } from "./category-item"

export const Category = () => {
    return (
        <section className="flex gap-8 flex-wrap justify-center items-center my-8">
            <CategoryItem 
                img="/img/banner.png" 
                alt="" 
                title="Transforme seu visual com as nossas perucas!"
                description="Descubra uma variedade incrível de perucas de alta qualidade para todos os estilos e ocasiões. Encontre a peruca perfeita para você e surpreenda a todos com um novo visual!" 
            />

            <CategoryItem 
                img="/img/hair.png" 
                alt="" 
                title="Alongue e volumize seus cabelos com as nossas hair extensions!"
                description="Adicione comprimento, volume e estilo aos seus cabelos com as nossas hair extensions de alta qualidade. Diversas opções disponíveis para combinar com seu cabelo natural." 
            />
        </section>
    )
}