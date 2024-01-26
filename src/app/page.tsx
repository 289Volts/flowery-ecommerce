import HeroSection from "@/components/Home/HeroSection";
import { fetchAssets, fetchContent } from "@/lib/Contentful/fetcher";

// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Home = async () => {
  const textContent = await fetchContent("home");
  const assets = await fetchAssets();

  console.log(assets.items[0].fields.file?.url);
  //   console.log(textContent.items);
  return (
    <>
      <HeroSection assets={assets} textContent={textContent.items} />

      {/* <CardLink
				href="/flowers"
				linkText="See all flowers"
				textContent="Flowers"
			/> */}
    </>
  );
};

export default Home;
