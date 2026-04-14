import Hero from "@/components/sections/Hero";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import MatchmakerQuiz from "@/components/ui/MatchmakerQuiz";
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
      <InfiniteMarquee />
      <MatchmakerQuiz />
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
