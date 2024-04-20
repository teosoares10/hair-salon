import { CategoryItem } from "./category-item"

export const Category = () => {
    return (
        <section className="flex gap-8 flex-wrap justify-center items-center mt-8 mb-16 space-y-4 lg:space-y-0">
            <CategoryItem 
                img="/img/banner.png" 
                alt="" 
                title="Perucas"
            />

            <CategoryItem 
                img="/img/hair.png" 
                alt="" 
                title="Cabelos"
            />
        </section>
    )
}