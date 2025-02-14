import AboutUs from "./AboutUs";
import Certifications from "../common/Certifications";
import HeroSection from "./HeroSection";
import ProductCategory from "./ProductCategory";
import Services from "../common/Services";
import WhatWeDo from "./WhatWeDo";

const index = () => {
  return (
    <>
      <HeroSection />
      <ProductCategory />
      <AboutUs />
      <WhatWeDo />
      <Services />
      <Certifications />
    </>
  );
};

export default index;
