import HeroSection from "./HeroSection";
import TableComponent from "./Table";
import Certifications from "../common/Certifications";
import Services from "../common/Services";

const index = () => {
  return (
    <>
      <HeroSection />
      <TableComponent />
      <Services />
      <Certifications />
    </>
  );
};

export default index;
