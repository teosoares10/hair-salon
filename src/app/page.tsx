import { Category } from "@/components/category";
import { ProductList } from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <section className=" flex gap-4 justify-center items-center bg-zinc-800">
        <div className="text-left">
          <Typography className="w-[26rem] text-6xl font-light text-white uppercase leading-tight">
            linda. glamorosa. confiante.
          </Typography>
          <Button as="link" href="" className="inline-block mt-8 text-black">compre agora</Button>
        </div>
        <Image src="/img/image.png" alt="" width={650} height={850} />
      </section>

      <Category />

      <ProductList />
    </section>
  );
}
