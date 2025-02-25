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
import DiverseProductRange from "../assets/logo/DiverseProductRange.png";
import CustomFormulationsBrandingSolution from "../assets/logo/CustomFormulationsBrandingSolution.png";
import FSSAI from "../assets/logo/fssaiLogo.png";
import GMP from "../assets/logo/GMPLogo.png";
import GLP from "../assets/logo/GLPLogo.png";
import FDA from "../assets/logo/FDALogo.png";

import CompanyValue from "../assets/images/Value.jpg";
import Mission from "../assets/images/Mission.jpg";
import MissionTwo from "../assets/images/MissionTwo.jpg";
import QualityPolicy from "../assets/images/QualityPolicy.jpg";

import EmbraceIntegrity from "../assets/images/EmbraceIntegrity.png";
import ByAnyMeansNecessary from "../assets/images/ByAnyMeansNecessary.png";
import TopPriority from "../assets/images/TopPriority.png";
import TeamworkAlways from "../assets/images/TeamworkAlways.png";
export const headerMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Product",
    subItems: [
      { name: "Tablet", url: "/product/tablets" },
      { name: "Capsule", url: "/product/capsule" },
      { name: "Syrup", url: "/product/syrup" },
      { name: "Solutions", url: "/product/solutions" },
      { name: "External Preparation", url: "/product/external-preparation" },
    ],
  },
];

export const productCategories = [
  {
    title: "Tablets",
    url: "tablets",
    image: Tablet,
  },
  {
    title: "Capsules",
    url: "capsule",
    image: Capsules,
  },
  {
    title: "External Preparations (Ointment, Cream, Gel, Lotion)",
    url: "external-preparations",
    image: ExternalPreparation,
  },
  {
    title: "Syrups",
    url: "syrup",
    image: Syrups,
  },
  {
    title: "Solutions",
    url: "solutions",
    image: Solutions,
  },
];

export const contactAddresses = [
  {
    title: "Corporate Office:",
    company: "Divyajivan Healthcare Pvt. Ltd.",
    email: "info@divyajivanhealth.org",
    phone: "+91 635-777-9100",
    address:
      "1001 & 1002 Zircon Arena Opp. De’Villa Restro,Pal RTO to Hazira Road, Surat - 394510, Gujarat, India",
  },
  {
    title: "Manufacturing Site (Unit 1):",
    company: "SHC Pharmaceuticals",
    email: "info@shcpharma.com",
    phone: "+91 635-777-9300",
    address:
      "18-19, Besides Amrut Udhyog Nagar, Diamond Nagar, Laskana, Surat - 395006, Gujarat, India",
  },
  {
    title: "Manufacturing Site (Unit 2):",
    company: "Divyajivan Lifescience Pvt. Ltd.",
    email: "info@divyajivanlife.org",
    phone: "+91 635-777-9200",
    address:
      "Plot no. 231, 232, 233 RJD Integrated Textile Park Ichhapore, Surat - 394510, Gujarat",
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

export const companyValues = [
  {
    image: CompanyValue,
    title: "Company value",
    textAlign: "text-start",

    description:
      "SHC Pharmaceuticals ensures quality, safety, and purity in pharmaceuticals for global health.",
  },
  {
    image: Mission,
    textAlign: "text-end",
    title: "our vision",
    marginStart: "md:ms-auto",
    description:
      "Our vision is to achieve excellence in formulation and become a leading pharmaceutical company that empowers life sciences through quality and innovation.",
  },
  {
    image: MissionTwo,
    textAlign: "text-start",
    title: "our mission",
    description:
      "Innovative and affordable products that address the needs and satisfaction of our customers",
  },
  {
    image: QualityPolicy,
    textAlign: "text-end",
    marginStart: "md:ms-auto",
    title: "QUALITY POLICY",
    description:
      "SHC Pharmaceuticals excels in innovation, quality, and customer satisfaction, providing reliable pharmaceuticals to healthcare providers, distributors, and retailers. Contact us to meet your manufacturing needs and contribute to global health.",
  },
];

export const coreValues = [
  {
    id: "01",
    title: "Embrace Integrity",
    description: "Always do the right thing, even when unobserved.",
    icon: EmbraceIntegrity,
    color: "bg-red-500",
  },
  {
    id: "02",
    title: "By Any Means Necessary",
    description: "Care for customers, employees, and products.",
    icon: ByAnyMeansNecessary,
    color: "bg-blue-500",
  },
  {
    id: "03",
    title: "Top Priority",
    description: "Listen to your customers: HCPs, patients, and partners.",
    icon: TopPriority,
    color: "bg-green-500",
  },
  {
    id: "04",
    title: "Teamwork always",
    description: "Foster collaboration both internally and externally.",
    icon: TeamworkAlways,
    color: "bg-yellow-500",
  },
];

export const manufacturingProcessData = [
  {
    id: 1,
    title: "Formulation Approval",
    description:
      "(If not already obtained) from state or central drug authorities.",
  },
  {
    id: 2,
    title: "Designing the Product",
    description:
      "Designing the product and finalizing packaging material for printing.",
  },
  {
    id: 3,
    title: "Raw Material Procurement",
    description: "Raw Material Procurement takes place.",
  },
  {
    id: 4,
    title: "Product Manufacturing",
    description:
      "Raw and packaging materials, alongside quality testing, taking place.",
  },
  {
    id: 5,
    title: "Product Stability Testing",
    description: "Product Stability Testing in various conditions.",
  },
  {
    id: 6,
    title: "Shipping the Finished Goods",
    description:
      "Shipping the Finished Goods to the client along with necessary quality documents.",
  },
];
