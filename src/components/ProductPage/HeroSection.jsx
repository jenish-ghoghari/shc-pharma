import CapsuleWhite from "../../assets/logo/CapsuleWhite.png";
import SyrupLogoBlack from "../../assets/logo/SyrupLogoBlack.png";
import TabletsLogoBlack from "../../assets/logo/TabletsLogoBlack.png";
import ExternalPreparationBlack from "../../assets/logo/ExternalPreparationBlack.png";
import SolutionLogoBlack from "../../assets/logo/SolutionLogoBlack.png";

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:col-span-2 gap-8 items-center">
          {/* Left Side Content */}
          <div className="space-y-6 md:col-span-2">
            <h2 className="text-3xl lg:text-5xl font-bold flex items-center gap-3">
              <img
                src={CapsuleWhite}
                alt="Capsule Logo"
                className="w-16 md:w-20"
              />
              Capsules
            </h2>
            <p className="text-gray-300 text-lg">
              Discover our range of high-quality capsules, formulated for
              superior absorption and effectiveness. Designed to meet diverse
              healthcare needs, ensuring safety and quality.
            </p>
            <p className="text-lg italic">
              Explore{" "}
              <span className="font-semibold">our pure veg capsules</span>,
              crafted for superior absorption and effectiveness. Made from
              <span className="font-bold"> plant-based capsule shells</span>,
              ensuring safety, quality, and suitability for all.
            </p>
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <button className="flex gap-3 items-center bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
              <img src={SyrupLogoBlack} alt="Syrup Logo" className="w-8" />
              <span>Syrup</span>
            </button>
            <button className="flex gap-3 items-center bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
              <img src={TabletsLogoBlack} alt="Tablets Logo" className="w-8" />
              <span>Tablets</span>
            </button>
            <button className="flex gap-3 items-center bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
              <img
                src={SolutionLogoBlack}
                alt="Solution Logo"
                className="w-8"
              />
              <span>Solutions</span>
            </button>
            <button className="flex gap-3 items-center bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
              <img
                src={ExternalPreparationBlack}
                alt="External Preparation Logo"
                className="w-8"
              />
              <span>External Prep.</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
