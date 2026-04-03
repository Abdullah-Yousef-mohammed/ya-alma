import Hero from "@/components/sections/Hero";
import WhyFree from "@/components/sections/WhyFree";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import LanguageCenters from "@/components/sections/LanguageCenters";
import Universities from "@/components/sections/Universities";
import VideoTours from "@/components/sections/VideoTours";
import Testimonials from "@/components/sections/Testimonials";
import Consultants from "@/components/sections/Consultants";
import BlogGrid from "@/components/sections/BlogGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyFree />
      <Process />
      <LanguageCenters />
      <Universities />
      <VideoTours />
      <Testimonials />
      <Consultants />
      <BlogGrid />
    </>
  );
}
