import WelcomeBackground from "../../assets/images/Welcome-SHC-Background-Photo.jpg";
const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-auto"
      style={{
        backgroundImage: `url(${WelcomeBackground})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center text-white  py-12 sm:py-16 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          About Us
        </h1>
      </div>
    </section>
  );
};

export default AboutUs;
