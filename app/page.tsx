import Image from "next/image";
import { Hero, Wrapper, ProductCard } from "./components";


export default function Home() {
  return (
    <main>
      <Hero />
      <Wrapper>
        {/* heading and paragraph start */}
        <div className="mx-auto my-[50px] text-center max-w-[800px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
            Cuhioning For Yours Miles
          </div>
          <div className="text-md md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            veritatis quae sequi alias suscipit officia laboriosam reprehenderit
            fugit deleniti reiciendis, atque commodi molestiae consequuntur,
            quidem id laborum maiores temporibus a?
          </div>
        </div>
        {/* heading and paragraph end */}
        {/* product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          
        </div>
      </Wrapper>
    </main>
  );
}
