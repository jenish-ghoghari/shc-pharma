import { companyValues } from "../Constant";

const CompanyValues = () => {
  return companyValues.map((item, index) => (
    <section
      key={index}
      className="relative w-full bg-cover bg-center h-auto"
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div
        className={`animate-fade-up container mx-auto px-6 lg:px-12 relative z-10 text-center text-white  py-12 sm:py-16 md:py-20 lg:py-24 `}
      >
        <div className={`${item.textAlign}`}>
          <h1 className="text-xl md:text-4xl font-bold leading-tight uppercase ">
            {item.title}
          </h1>
          <p
            className={`mt-4 text-lg italic md:text-xl md:w-1/3 ${item.marginStart}`}
          >
            {item.description}
          </p>
        </div>
      </div>
    </section>
  ));
};

export default CompanyValues;
