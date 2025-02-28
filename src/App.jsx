import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Main";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ProductsPage from "./components/ProductPage/Main";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUsPage/Main";
import Services from "./components/ServicePage/Main";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={<Home />} />
          <Route path="/product/:id" component={<ProductsPage />} />
          <Route path="/contact" component={<ContactUs />} />
          <Route path="/about" component={<AboutUs />} />
          <Route path="/services" component={<Services />} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
