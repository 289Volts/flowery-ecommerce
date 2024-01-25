import { fetchContent } from "@/lib/Contentful/fetcher";
import heroImg from "@/public/assets/images/heroImgSM.png";
import Image from "next/image";
// import { createClient } from 'contentful';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Home = async () => {
  const res = await fetchContent("home");
  console.log(res.items);
  return (
    <main className="">
      <div className="mx-auto w-[90%]">
        <section className="">
          {res.items.map(
            ({ metadata, sys, fields: { heroSection, ...rest } }) => (
              <div key={sys.id} className="divide-y-2 divide-black py-10">
                <div className="space-y-4 pb-6">
                  <h1 className="text-mobileHeading1">{heroSection.heading}</h1>
                  <p className="text-mobileCaption">{heroSection.subHeading}</p>
                </div>
                <div className="grid grid-cols-2 divide-x-2 divide-black pt-4">
                  <Image src={heroImg} alt="" className="" />
                  <p className="pl-4 text-xs">{heroSection.extraText}</p>
                </div>
              </div>
            ),
          )}
        </section>
      </div>

      {/* <CardLink
				href="/flowers"
				linkText="See all flowers"
				textContent="Flowers"
			/> */}
    </main>
  );
};

export default Home;
