import ProcessOfThirdLogo from "../../assets/images/ProcessOfThirdPartyPharmaManufacturing.png";
import ProcessOfThirdPartyPharmaManufacturing1 from "../../assets/images/ProcessOfThirdPartyPharmaManufacturing1.jpg";
import ProcessOfThirdPartyPharmaManufacturing2 from "../../assets/images/ProcessOfThirdPartyPharmaManufacturing2.jpg";

const PharmaProcess = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <div className="flex justify-center mb-4">
          <img src={ProcessOfThirdLogo} alt="Process Icon" className="w-20 md:w-32" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mt-10">
          Process of Third-Party Pharma Manufacturing
        </h2>

        <div className="mt-10 md:mt-16">
          {/* First Section */}
          <div className="flex flex-col items-center  md:flex-row gap-8 text-left mb-16">
            <div className="w-full md:w-1/2">
              {" "}
              <img
                src={ProcessOfThirdPartyPharmaManufacturing1}
                alt="Pharma Manufacturing"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-300 text-base md:text-lg">
                The first step is to have detailed discussions with the chosen
                third-party manufacturer about the products you need them to
                produce under your company’s name. It’s important to clarify
                pricing and taxation rates during these discussions. Once all
                your questions and concerns are addressed, the process moves
                into specific phases for carrying out the third-party
                manufacturing, ensuring smooth operations and product delivery.
              </p>
            </div>
          </div>

          {/* Second Section (Flex column reverse for mobile view) */}
          <div className="flex flex-col-reverse items-center md:flex-row gap-8 text-left">
            <div className="w-full md:w-1/2">
              {" "}
              <p className="text-gray-300 text-base md:text-lg">
                The next step involves finalizing the product composition,
                packaging details, and necessary legal documentation. The
                third-party manufacturer ensures compliance with regulatory
                guidelines before beginning the production process.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              {" "}
              <img
                src={ProcessOfThirdPartyPharmaManufacturing2}
                alt="Pharma Manufacturing"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaProcess;
