import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import { THomeQueryResult } from "@/types/Sanity/sanity.type";
import { client } from "@/utils/sanityClient";

// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const Home = async () => {
  const content = await client.fetch<THomeQueryResult>(`*[_type == "home"]{
    ...,
    heroSection {
    ...,
    categories[]->{  
      ...
    }
  }
}`);

  // console.log(content[0]);
  return (
    <>
      <HeroSection data={content[0].heroSection} />
      <AboutSection data={content[0].about} />
    </>
  );
};

export default Home;
