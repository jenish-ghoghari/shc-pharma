import HeroSection from "./HeroSection";
import TableComponent from "./Table";
import Certifications from "../common/Certifications";
import Services from "../common/Services";
import { useParams } from "react-router-dom";
import {
  commercialKeywords,
  localKeywords,
  longTailKeywords,
  nicheKeywords,
  primaryKeywords,
  productPagesData,
} from "./ProductPageData";
import { Helmet } from "react-helmet";

const Main = () => {
  const { id } = useParams();
  const pageData = productPagesData.find(
    (page) => page.pageUrl.toLowerCase() === id.toLowerCase()
  );

  const title = pageData
    ? `${pageData.title} | SHC Pharmaceuticals`
    : "Home | SHC Pharmaceuticals";
  const description =
    pageData?.seoDescription ||
    "Collaborate with Leaders in Quality Third-Party Manufacturing. Best third-party pharmaceutical manufacturer in India, USFDA-approved pharma third-party manufacturers, EU-GMP contract manufacturing pharma";

  // Combine Global and Page-Specific Keywords
  const keywords = [
    ...primaryKeywords,
    ...longTailKeywords,
    ...nicheKeywords,
    ...commercialKeywords,
    ...localKeywords,
    ...(pageData?.keywords || []), // Add dynamic keywords from `productPagesData`
  ].join(", "); // Convert array to a comma-separated string

  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>;
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
