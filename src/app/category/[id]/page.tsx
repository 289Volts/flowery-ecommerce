import { TCategoriesQueryResult } from "@/types/Sanity/categories.sanity.types";
import { urlFor } from "@/utils/Sanity/imageBuilder";
import { client } from "@/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const content = await client.fetch<TCategoriesQueryResult>(
    `*[_type == "categories" && slug.current == "${params.id}"]{
    ...,
    products[]->{  
      image,
      slug,
      title
    }
      }`,
  );
  const posterImgOpt = urlFor(content[0].posterImage);
  const posterImg = posterImgOpt.url();

  return (
    <main className="flex-1 lg:grid lg:grid-cols-[1fr_1.4fr] xl:grid-cols-2">
      <div className="left-0 top-[58px] h-[50svh] lg:sticky lg:top-[81px] lg:h-[600px] lg:border-b lg:border-b-black xl:h-[630px] 2xl:h-[720px]">
        <Image
          src={posterImg}
          alt=""
          width={posterImgOpt.width(720).options.width}
          height={posterImgOpt.height(720).options.height}
          className="h-full w-full object-cover"
        />
      </div>
      <section className="border-x border-t border-x-black border-t-black md:grid md:grid-cols-2 lg:border-t-0">
        {content[0].products.map(({ image, slug }, i) => {
          const productImgOpt = urlFor(image);
          const productImg = productImgOpt.url();
          return (
            <Link
              href={`/product/${slug.current}`}
              key={i}
              className={`aspect-squar inline-block h-[360px] w-full min-w-[280px] max-w-full border-b border-b-black last:border-b-0 odd:border-r md:h-[384px] md:odd:border-r-black lg:h-[300px] xl:h-[315px] 2xl:h-[360px] [&:nth-last-child(2)]:border-b-0`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={productImg}
                  alt=""
                  fill
                  // width={productImgOpt.width(360).options.width}
                  // height={productImgOpt.height(360).options.height}
                  className="object-cove h-full w-full"
                />
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default CategoryPage;
