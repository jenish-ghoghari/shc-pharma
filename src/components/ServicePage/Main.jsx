import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import ManufacturingProcess from "./ManufacturingProcess";
import PharmaProcess from "./PharmaProcess";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Services | SHC Pharmaceuticals</title>
        <meta
          name="description"
          content="Best third-party pharmaceutical manufacturer in India. USFDA-approved pharma third-party manufacturers, EU-GMP contract manufacturing pharma"
        />
        <meta
          name="keywords"
          content="GMP-certified pharmaceutical manufacturer, WHO-GMP third-party pharma company, EU-GMP contract manufacturing pharma, USFDA-approved pharma third-party manufacturers, Pharmaceutical formulation development services, Nutraceutical contract manufacturer in India, Ayurvedic third-party manufacturing company, Derma third-party manufacturing pharma, Veterinary drug contract manufacturer"
        />
      </Helmet>
      <HeroSection />
      <InfoSection />
      <PharmaProcess />
      <ManufacturingProcess />
    </>
  );
};

export default Main;
