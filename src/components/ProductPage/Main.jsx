import HeroSection from "./HeroSection";
import TableComponent from "./Table";
import Certifications from "../common/Certifications";
import Services from "../common/Services";
import { useParams } from "react-router-dom";
import { productPagesData } from "./ProductPageData";

const Main = () => {
  const { id } = useParams();
  const pageData = productPagesData.find(
    (page) => page.pageUrl.toLowerCase() === id.toLowerCase()
  );
  return (
    <>
      <HeroSection pageData={pageData} />
      <TableComponent pageData={pageData} />
      <Services />
      <Certifications />
    </>
  );
};

export default Main;
