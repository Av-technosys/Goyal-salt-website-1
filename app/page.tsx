


import BrandVideoSection from "@/src/component/Brandvideo";
import CommunityQuoteSection from "@/src/component/Communitysection";
import DistributorCTASection from "@/src/component/DistributorCTA";


import SaltFaqSection from "@/src/component/FaqSection";
import HeroCarousel from "@/src/component/Herocarousel";
import InstagramSection from "@/src/component/Instasecion";
import Popup from "@/src/component/popup";
import SaltProductsShowcase from "@/src/component/Productshowcase";
import ProductCarousel from "@/src/component/productsilder";
import Sectionone from "@/src/component/Sectionone";
import HealthSaltSection from "@/src/component/Sectiontwo";
import PinkSaltSection from "@/src/component/Sectiontwo";
import SaltShowcaseSection from "@/src/component/Sectiontwo";
import ProductShowcase from "@/src/component/Sectiontwo";
import { Section } from "lucide-react";

export const metadata = {
  title: "Goyal Salt - Trusted Salt Manufacturers & Suppliers in India",
  description:
    "Goyal Salt Ltd is a leading salt manufacturer, delivering premium-quality salt to distributors and suppliers across India. Call us to become our distributor.",
  alternates: {
    canonical: "https://goyalsaltltd.com/",
  },
};


export default function Home() {
  return (
    <div>
      <Popup/>
      <HeroCarousel />
      <ProductCarousel />
      <Sectionone />
      <HealthSaltSection/>
      <BrandVideoSection/>
      <CommunityQuoteSection/>
      <SaltProductsShowcase/>
      <DistributorCTASection/>
      <SaltFaqSection/>
      <InstagramSection/>
      
    </div>
  );
}
