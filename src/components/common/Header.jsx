import { useState, useEffect } from "react";
import { headerMenu } from "../Constant";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi"; // Import the down caret icon
import Logo from "../../assets/LOGO.svg";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const onMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  // Close dropdown and mobile menu on page change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductDropdownOpen(false);
  }, [currentPath]); // Runs whenever the URL path changes

  return (
    <header className="sticky top-0 z-50 sm:text-center md:px-0 bg-white">
      <nav className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-3">
        {/* Logo Section */}
        <Link to={"/"} className="w-[80px] md:w-[100px] ">
          <img src={Logo} alt="LOGO" className="w-auto" />
        </Link>

        {/* Navigation Links and Login Button */}
        <div className="flex items-center gap-3">
          {/* Navigation Links */}
          <div
            className={` navLinks duration-500 absolute md:static w-full md:h-auto h-auto bg-white flex md:items-center gap-[1.5vw] top-[100%] ${
              isMenuOpen ? "left-[0%]" : "left-[-113%]"
            } md:left-0 px-5 md:py-0 py-5 z-50`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              {headerMenu.map((item, index) => (
                <li
                  key={index}
                  className="relative max-w-fit pr-3 md:pr-0 py-1"
                >
                  {item.url ? (
                    <Link
                      to={`${item.url}`}
                      className={` hover:text-primary-blue flex items-center gap-1 transition-all ${
                        currentPath === item.url
                          ? "text-primary-blue font-bold"
                          : "text-gray-500 font-semibold"
                      }`}
                     
                    >
                      {item.name}
                      {item.subItems && (
                        <FiChevronDown className="text-gray-500" />
                      )}
                    </Link>
                  ) : (
                    <button
                      onClick={toggleProductDropdown}
                      className={`hover:text-primary-blue focus:outline-none flex items-center gap-1  ${
                        isProductDropdownOpen
                          ? "text-primary-blue font-bold"
                          : "text-gray-500 font-semibold"
                      }`}
                    >
                      {item.name}
                      {item.subItems && (
                        <FiChevronDown className="text-gray-500" />
                      )}
                    </button>
                  )}

                  {item.subItems && isProductDropdownOpen && (
                    <div
                      className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-48 text-start"
                      onMouseLeave={() => setIsProductDropdownOpen(false)}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className={`px-4 py-2 hover:bg-gray-100 ${
                            currentPath === subItem.url
                              ? "bg-gray-100 font-bold text-primary-blue"
                              : ""
                          }`}
                        >
                          <Link
                            to={subItem.url}
                            className={`hover:text-primary-blue font-semibold ${
                              currentPath === subItem.url
                                ? "text-primary-blue"
                                : "text-gray-700"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Login Button and Menu Toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact-us"
              className="text-center text-sm md:text-lg hover:bg-transparent hover:text-primary-blue hover:border-primary-blue hover:transition-all bg-primary-blue font-bold border text-white px-2 md:px-5 py-2 rounded-[8px]  w-[110px] sm:w-[145px] "
            >
              Contact Us
            </Link>
            <button
              onClick={onMenuToggle}
              className="text-[30px] cursor-pointer md:hidden hover:transition-all"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <IoMdClose /> : <HiMiniBars3 />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
