import AboutUs from "./AboutUs";
import Certifications from "../common/Certifications";
import HeroSection from "./HeroSection";
import ProductCategory from "./ProductCategory";
import Services from "../common/Services";
import WhatWeDo from "./WhatWeDo";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Home | SHC Pharmaceuticals</title>
        <meta
          name="description"
          content="Collaborate with Leaders in Quality Third-Party Manufacturing"
        />
        <meta name="keywords" content="Ensuring Reliability and Consistency" />
      </Helmet>
      <HeroSection />
      <AboutUs />
      <ProductCategory />
      <WhatWeDo />
      <Services />
      <Certifications />
    </>
  );
};

export default Main;
