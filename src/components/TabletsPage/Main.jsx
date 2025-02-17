import HeroSection from "./HeroSection";
import TableComponent from "./Table";
import Certifications from "../common/Certifications";
import Services from "../common/Services";
import { useParams } from "react-router-dom";
import { tabletPageData } from "./TabletPageData";

const Main = () => {
  return (
    <>
      <HeroSection pageData={tabletPageData} />
      <TableComponent pageData={tabletPageData} />
      <Services />
      <Certifications />
    </>
  );
};

export default Main;
