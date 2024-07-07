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
      disImage,
      slug,
      title
    }
      }`,
  );
  const posterImgOpt = urlFor(content[0].posterImage);
  const posterImg = posterImgOpt.url();

  return (
    <main className="w-full flex-1 md:flex">
      <div className="md:flex-1 lg:border-b lg:border-b-black">
        <Image
          src={posterImg}
          alt=""
          width={posterImgOpt.width(720).options.width}
          height={posterImgOpt.height(720).options.height}
          className="h-full w-full object-cover"
        />
      </div>
      <section className="border-x border-t border-x-black border-t-black md:grid lg:border-t-0">
        {content[0].products.map(({ disImage, slug }, i) => {
          const productImgOpt = urlFor(disImage);
          const productImg = productImgOpt?.url();
          return (
            <Link
              href={`/product/${slug.current}`}
              key={i}
              className={`1xl:h-[360px] block h-full min-w-[280px] border-b border-b-black  md:h-[384px] md:w-max lg:h-[300px] xl:h-[315px]`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={productImg}
                  alt=""
                  width={productImgOpt.width(360).options.width}
                  height={productImgOpt.height(360).options.height}
                  className="h-full w-full"
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
