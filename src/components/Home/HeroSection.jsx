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
      <div className=" absolute md:w-[35%] bottom-0 right-0 bg-primary-blue text-white p-4 md:p-6 flex justify-center items-center gap-4 z-10">
        <p className="text-sm md:text-xl">
          Are you ready to achieve <br />{" "}
          <strong>successful growth for your business?</strong>
        </p>
        <Link to="/contact-us" className=" bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-300 transition">
          <FaArrowAltCircleRight size={25} className="text-primary-blue"/>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
