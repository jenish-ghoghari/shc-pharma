import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { contactAddresses } from "../Constant";
import LogoWhite from "../../assets/logo/logo-white.svg";
import LogoDivyaJivan from "../../assets/logo/divyajivan-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-10 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="mb-4 flex gap-10 items-center justify-center md:justify-normal">
              <div className="w-[90px] md:w-[100px]">
                <img src={LogoWhite} alt="LOGO" className="w-auto" />
              </div>
              <div className="w-[90px] md:w-[100px] ">
                <img
                  src={LogoDivyaJivan}
                  alt="LogoDivyaJivan"
                  className="w-auto"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Collaborate with Leaders in Quality Third-Party Manufacturing.
              Ensuring, Reliability, and Consistency.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
                <Link
                  key={index}
                  to="/"
                  target="_blank"
                  className="text-primary-blue hover:text-[#83c5ee] transition"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {contactAddresses.map((info, index) => (
            <div key={index} className="text-left">
              <p className="text-lg font-semibold mb-2">{info.title}</p>
              <p className="font-bold">{info.company}</p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center  md:justify-start gap-2">
                  <IoMdMail className="w-5 h-5" />
                  <a
                    href={`mailto:${info.email}`}
                    className="hover:underline text-sm md:text-base"
                  >
                    {info.email}
                  </a>
                </div>
                <div className="flex items-center  md:justify-start gap-2">
                  <IoIosCall className="w-5 h-5" />
                  <a
                    href={`tel:${info.phone.replace(/\s+/g, "")}`}
                    className="hover:underline text-sm md:text-base"
                  >
                    {info.phone}
                  </a>
                </div>
                <div className="flex items-start  md:justify-start gap-2">
                  <FaLocationDot className="w-5 h-5" />
                  <address className="not-italic text-sm md:text-base">
                    {info.address}
                  </address>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2018 SHC Pharmaceuticals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
