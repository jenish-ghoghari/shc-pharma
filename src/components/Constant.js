import Tablet from "../assets/images/Tablet-Photo.jpg";
import Capsules from "../assets/images/Capsule-Photo.jpg";
import ExternalPreparation from "../assets/images/External-Preparation-Photo.jpg";
import Syrups from "../assets/images/Syrup-Photo.jpg";
import Solutions from "../assets/images/Solution-Photo.jpg";
import ContractManufacturing from "../assets/images/Contract-Manufacturing-Photo.jpg";
import Quality from "../assets/images/Quality-Photo.jpg";
import Career from "../assets/images/Career-Photo.jpg";
import PharmaFranchise from "../assets/images/Pharma-Franchise-Photo.jpg";

import TrustworthyBusinessPolicy from "../assets/logo/TrustworthyBusinessPolicy.png";
import QuickDelivery from "../assets/logo/QuickDelivery.png";
import CompetitiveAffordablePricing from "../assets/logo/CompetitiveAffordablePricing.png";
import PureSafeQualityProducts from "../assets/logo/PureSafeQualityProducts.png";
import DiverseProductRange from "../assets/logo/TabletsLogoBlack.png";
import CustomFormulationsBrandingSolution from "../assets/logo/TabletsLogoBlack.png";
import FSSAI from "../assets/logo/fssaiLogo.png";
import GMP from "../assets/logo/GMPLogo.png";
import GLP from "../assets/logo/GLPLogo.png";
import FDA from "../assets/logo/FDALogo.png";
export const headerMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Product",
    subItems: [
      { name: "Capsule", url: "/product/capsule" },
      { name: "Tablet", url: "/product/tablet" },
      { name: "Injection", url: "/product/injection" },
    ],
  },
];

export const productCategories = [
  {
    title: "Tablets",
    image: Tablet,
  },
  {
    title: "Capsules",
    image: Capsules,
  },
  {
    title: "External Preparations Ointment-Cream-Gel-Lotion",
    image: ExternalPreparation,
  },
  {
    title: "Syrups",
    image: Syrups,
  },
  {
    title: "Solutions",
    image: Solutions,
  },
];

export const contactAddresses = [
  {
    title: "Corporate Office:",
    company: "Divyajivan Healthcare Pvt. Ltd.",
    email: "info@divyajivanhealth.org",
    phone: "+91 635-777-9100",
    address: "1001 & 1002 Zircon Arena, Surat - 394510, Gujarat, India",
  },
  {
    title: "Manufacturing Site (Unit 1):",
    company: "SHC Pharmaceuticals",
    email: "info@shcpharma.com",
    phone: "+91 973-702-0866",
    address: "Diamond Nagar, Laskana, Surat - 395006, Gujarat, India",
  },
  {
    title: "Manufacturing Site (Unit 2):",
    company: "Divyajivan Lifescience Pvt. Ltd.",
    email: "info@divyajivanlife.org",
    phone: "+91 231-232-233",
    address: "Ichhapore, Surat - 394510, Gujarat, India",
  },
];

export const whatWeDo = [
  {
    title: "CONTRACT MANUFACTURING",
    description:
      "We specialize in Pharmaceutical Contract production, which is one of our most esteemed services. Our expertise has garnered appreciation both nationally and internationally, contributing to a successful business focused on value-added and quality services.",
    image: ContractManufacturing,
  },
  {
    title: "PHARMA FRANCHISE",
    description:
      "We are offering a career opportunity in Pharmaceutical Franchise Marketing. This position is ideal for individuals with substantial experience in pharmaceutical marketing who aspire to establish their own business within the industry.",
    image: PharmaFranchise,
  },
  {
    title: "QUALITY",
    description:
      "We have established the infrastructure and procedures necessary to uphold a rigorous quality policy. All systems are thoroughly documented and implemented by skilled, trained staff, with a reporting structure that operates independently of manufacturing.",
    image: Quality,
  },
  {
    title: "CAREER",
    description:
      "SHC Pharma is an equal opportunity employer and provides employment to people from diverse backgrounds. All individuals who believe that they can contribute to the organization's goals are welcome to apply for a job with us.",
    image: Career,
  },
];

export const services = [
  { image: TrustworthyBusinessPolicy, title: "Trustworthy Business Policy" },
  { image: QuickDelivery, title: "Quick Delivery, Every Time" },
  {
    image: CompetitiveAffordablePricing,
    title: "Competitive & Affordable Pricing",
  },
  { image: PureSafeQualityProducts, title: "Pure & Safe Quality Products" },
  { image: DiverseProductRange, title: "Diverse Product Range" },
  {
    image: CustomFormulationsBrandingSolution,
    title: "Custom Formulations & Branding Solution",
  },
];

export const licenses = [
  {
    image: FSSAI,
    name: "FSSAI",
  },
  {
    image: GMP,
    name: "GMP",
  },
  {
    image: GLP,
    name: "GLP",
  },
  {
    image: FDA,
    name: "FDA",
  },
];
