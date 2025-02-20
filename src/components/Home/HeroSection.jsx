import { FaArrowAltCircleRight } from "react-icons/fa";
import HomeBackgroundVideo from "../../assets/images/Home-Background-Video.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[600px] lg:h-[85vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HomeBackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start justify-center h-full text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Collaborate with <br /> Leaders in Quality <br /> Third-Party
          Manufacturing
        </h1>
        <p className="mt-4 text-lg italic md:text-xl">
          Ensuring <span className="font-semibold">Reliability</span> and{" "}
          <span className="font-semibold">Consistency</span>
        </p>
      </div>

      {/* Call to Action */}
      <div className="absolute w-full md:w-[65%] lg:w-[55%] xl:w-[46%] bottom-0 right-0 bg-primary-blue text-white flex justify-between items-center gap-4 z-10">
        <p className="text-sm md:text-xl p-4 md:p-6">
          Are you ready to achieve <br />
          <strong>successful growth for your business?</strong>
        </p>
        <div className="bg-white px-6 w-1/4">
          <Link
            to="/contact-us"
            className="text-black p-3 rounded-full transition"
          >
            <span className="flex gap-2 items-center font-bold text-md">
              <span className="hidden md:block">Submit your Inquiry</span>
              <FaArrowAltCircleRight size={60} className="text-primary-blue" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
