import { licenses } from "../Constant";

const Certifications = () => {
  return (
    <div className="bg-[#2295de] text-white text-center">
      <div className="container mx-auto px-6 lg:px-12 py-10 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          Certified By
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {licenses.map((data, index) => (
            <img
              key={index}
              src={data.image}
              alt={data.name}
              className="w-15 sm:w-20 md:w-30 lg:w-40 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
