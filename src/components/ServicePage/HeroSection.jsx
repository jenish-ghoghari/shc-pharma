import Background from "../../assets/images/ThirdPartyManufacturingBackground.jpg";
const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-auto"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center text-white  py-12 sm:py-16 md:py-20 lg:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Third-Party Manufacturing
        </h1>
      </div>
    </section>
  );
};

export default AboutUs;
