import HeroSection from "@/components/Home/HeroSection";
import { fetchContent } from "@/lib/Contentful/fetcher";

// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Home = async () => {
  const res = await fetchContent("home");
  //   console.log(res.items);
  return (
    <>
      <HeroSection res={res} />

      {/* <CardLink
				href="/flowers"
				linkText="See all flowers"
				textContent="Flowers"
			/> */}
    </>
  );
};

export default Home;
