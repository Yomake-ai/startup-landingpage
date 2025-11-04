import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeOne from "./components/home-1/HeroHomeOne";
import FeaturesHomeOne from "./components/home-1/FeaturesHomeOne";
import AboutHomeOne from "./components/home-1/AboutHomeOne";
import VideoHomeOne from "./components/home-1/VideoHomeOne";
import PricingHomeOne from "./components/home-1/PricingHomeOne";
import FaqHomeOne from "./components/home-1/FaqHomeOne";
import TestimonialHomeOne from "./components/home-1/TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

export default function App() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroHomeOne />
          <FeaturesHomeOne />
          <AboutHomeOne />
          <VideoHomeOne />
          <PricingHomeOne />
          <FaqHomeOne />
          <TestimonialHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
