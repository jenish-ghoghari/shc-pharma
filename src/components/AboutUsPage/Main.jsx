import HeroSection from "./HeroSection";
import AboutSHC from "./AboutSHC";
import CompanyValues from "./CompanyValues";
import CoreValues from "./CoreValues";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SHC Pharmaceuticals</title>
        <meta
          name="description"
          content="The Leading Pharmaceutical in India | SHC Pharmaceuticals. Best third-party pharmaceutical manufacturer in India, USFDA-approved pharma third-party manufacturers,  EU-GMP contract manufacturing pharma"
        />
        <meta
          name="keywords"
          content="Best third-party pharma manufacturer in Gujarat, Top pharma contract manufacturing in Surat, Indian pharmaceutical contract manufacturing company, Third-party pharma manufacturing in Mumbai, WHO-GMP pharma manufacturer in India, Ayurvedic pharma third-party manufacturing in India, Surat-based third-party pharma company, Pharma third-party manufacturers in Ahmedabad, Best pharma manufacturers near Bharuch, Pharma CMO services in India"
        />
      </Helmet>
      <HeroSection />
      <AboutSHC />
      <CompanyValues />
      <CoreValues />
    </>
  );
};

export default Main;
