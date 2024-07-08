import Action from "@/components/shared/Action";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <main className="flex-1 ">
      <section className="">
        <div className="h-full w-full">
          <Image src="" alt="" className="" />
        </div>
      </section>
      <section className="px-4 py-10">
        {/* breadcrumbs */}
        <div className=""></div>

        {/* product info */}
        <div className="">
          <h1 className="">
            <span className="">title</span> - <span className="">$ price</span>{" "}
          </h1>
          <p className="">desc</p>
        </div>
        <div className="">
          <h3 className="capitalize">quantity</h3>
          <div className=""></div>
        </div>
        {/* combination */}
        <div className="">
          <h3 className="">Excellent Combination with:</h3>
          {/* carousel */}
        </div>
        {/* price options */}
        <div className="">
          <h3 className="">Price options</h3>
          {/* radio buttons */}
        </div>
        {/* add to cart */}
        <Action variant="primary" className="w-full">
          Add to cart
        </Action>
      </section>
      <section className="">
        <div className="">
          <h2 className="">You may also like...</h2>
        </div>
        {/* featured products */}
        <section className=""></section>
      </section>
    </main>
  );
};

export default SingleProductPage;
