import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Main";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProductsPage from "./components/ProductPage/Main";
import ContactUs from "./components/ContactUs/ContactUs";
import TabletPage from "./components/TabletsPage/Main";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsPage />} />
        <Route path="/product/tablets" element={<TabletPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
