import AboutSection from "@/components/Home/AboutSection";
import Contact from "@/components/Home/Contact";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import WhyUs from "@/components/Home/WhyUs";
import { THomeQueryResult } from "@/types/Sanity/home.sanity.types";
import { client } from "@/utils/sanityClient";

// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const HomePage = async () => {
  const content = await client.fetch<THomeQueryResult>(`*[_type == "home"]{
    ...,
    heroSection {
    ...,
    categories[]->{  
      ...
    }
  }
}`);

  return (
    <main className="flex-1 text-primary">
      <HeroSection data={content[0].heroSection} />
      <AboutSection data={content[0].about} />
      <WhyUs data={content[0].whyUs} />
      <Contact />
      <Services data={content[0].services} />
      <Testimonials data={content[0].testimonials} />
    </main>
  );
};

export default HomePage;
