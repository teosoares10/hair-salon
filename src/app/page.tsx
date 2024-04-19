import { Category } from "@/components/category";
import { ProductList } from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <section className="flex flex-wrap gap-4 justify-center items-center bg-zinc-800">
        <div className="lg:text-left text-center pt-8 lg:pt-auto">
          <Typography className="lg:w-[26rem] lg:text-6xl text-5xl long:font-light font-bold text-white uppercase leading-tight">
            linda. glamorosa. confiante.
          </Typography>
          <Button as="link" href="" className="inline-block mt-8 text-black">compre agora</Button>
        </div>
        <Image src="/img/image.png" alt="" width={650} height={850} className="mt-4 md:mt-0" />
      </section>

      <Category />

      <ProductList />
    </section>
  );
}
