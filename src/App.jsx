import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProductsPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
