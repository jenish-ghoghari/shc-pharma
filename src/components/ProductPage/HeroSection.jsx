import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import parse from "html-react-parser";

const HeroSection = ({ pageData }) => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:col-span-2 gap-8 items-center">
          {/* Left Side Content */}
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-3xl lg:text-5xl font-bold flex items-center gap-3">
              <img
                src={pageData.pageProductLogo}
                alt="Product Logo"
                className="w-16 md:w-20"
              />
              {pageData.pageTitle}
            </h2>
            <p className="text-gray-300 text-lg">{pageData.pageDescription}</p>
            <p className="text-lg italic">
              {parse(pageData.pageSubDescription)}
            </p>
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-col gap-4 w-full">
            {pageData.otherPageLinks.map((links, index) => (
              <Link
                to={links.url}
                key={index}
                className="flex gap-3 items-center bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                <img src={links.icon} alt="Syrup Logo" className="w-8" />
                <span>{links.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  pageData: PropTypes.shape({
    pageTitle: PropTypes.string.isRequired,
    pageDescription: PropTypes.string.isRequired,
    pageProductLogo: PropTypes.string.isRequired,
    pageSubDescription: PropTypes.string.isRequired,
    otherPageLinks: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default HeroSection;
