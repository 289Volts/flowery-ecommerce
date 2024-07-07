import Image from "next/image";

const CategoryPage = () => {
  const duds = new Array(10).fill(0);
  return (
    <main className="flex-1 lg:grid lg:grid-cols-[1fr_1.4fr] xl:grid-cols-2">
      <div className="left-0 top-0 h-[50svh] lg:sticky lg:h-[360px] lg:border-b lg:border-b-black xl:h-[720px]"></div>
      <section className="border-t border-t-black md:grid md:grid-cols-2 lg:border-l lg:border-t-0 lg:border-l-black">
        {duds.map((dud, i) => {
          return (
            <div
              key={i}
              className={`aspect-squar h-[375px] border-b border-b-black last:border-b-0 odd:border-r odd:border-r-black md:h-[384px] lg:h-[360px] [&:nth-last-child(2)]:border-b-0`}
            >
              <div className="">
                <Image src="" alt="" className="" />
              </div>
              <div className="">
                <p className="">Name</p>
                <p className="">price</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default CategoryPage;
