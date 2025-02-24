import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Main";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProductsPage from "./components/ProductPage/Main";
import ContactUs from "./components/ContactUs/ContactUs";
import TabletPage from "./components/TabletsPage/Main";
import AboutUs from "./components/AboutUsPage/Main";
import Services from "./components/ServicePage/Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsPage />} />
        <Route path="/product/tablets" element={<TabletPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
