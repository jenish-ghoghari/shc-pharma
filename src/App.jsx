import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/Home/Main";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProductsPage from "./components/ProductPage/Main";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUsPage/Main";
import Services from "./components/ServicePage/Main";
import { useEffect } from "react";
import PageNotFound from "./components/ErrorPage/PageNotFound";
function App() {
  const location = useLocation();
  const pathnames = location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathnames]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
