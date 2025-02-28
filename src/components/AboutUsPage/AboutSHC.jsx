import AboutUsImage from "../../assets/images/AboutUsBg.jpg";
import Logo from "../../assets/LOGO.svg";
import DivyaJivanLifescience from "../../assets/logo/Divyajivan-Lifescience-Logo.svg";

const AboutSHC = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-6 border md:border-0 ">
        <div className="w-full md:w-1/2">
          <img
            src={AboutUsImage}
            alt="Order custom formulation medicines in bulk"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full p-4 md:w-1/2  md:p-0">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900">
            The Leading Pharmaceutical in India | SHC Pharmaceuticals
          </h2>
          <p className="text-sm md:text-base text-gray-700 mt-4 leading-relaxed">
            SHC Pharmaceuticals, a part of the esteemed Divyajivan Lifescience
            Pvt Ltd group, is a trusted pharmaceutical manufacturer specializing
            in high-quality tablets, capsules, ointments, and syrups.
          </p>
          <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
            With a commitment to innovation, safety, and global manufacturing
            standards, we are dedicated to delivering a diverse range of
            effective healthcare solutions that meet the evolving needs of the
            pharmaceutical industry.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 pt-16">
        <div className="w-full md:w-1/2 text-center md:text-right flex flex-col gap-4 items-center md:items-end">
          <img
            src={Logo}
            alt="Best third-party pharma manufacturer for tablets"
            className="w-auto h-[50px] object-contain" // Adjusted object-fill to object-contain for better scaling
          />
          <p className="text-sm md:text-base text-gray-700  leading-relaxed">
            SHC Pharmaceuticals is a reputable pharmaceutical manufacturer
            specializing in the production of high-quality syrups and external
            preparations, including gels, lotions, creams, and solutions. SHC
            Pharmaceuticals is dedicated to delivering innovative and effective
            healthcare solutions. With advanced facilities and a focus on safety
            and efficacy, the company is a trusted partner for clients seeking
            reliable manufacturing services tailored to their needs.
          </p>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-4 items-center md:items-start">
          <img
            src={DivyaJivanLifescience}
            alt="GMP-certified pharmaceutical manufacturer"
            className="w-[300px] h-auto object-contain" // Adjusted for better scaling
          />
          <p className="text-sm md:text-base text-gray-700  leading-relaxed">
            Divyajivan Lifescience Pvt Ltd is a leading pharmaceutical
            manufacturer with expertise in the production of tablets, capsules,
            and ointments. The company is committed to upholding global
            manufacturing standards and maintaining a strong focus on quality
            and innovation. With cutting-edge technology and a dedicated team,
            Divyajivan Lifescience Pvt Ltd continues to deliver diverse
            healthcare products that cater to the evolving needs of the
            pharmaceutical industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSHC;
