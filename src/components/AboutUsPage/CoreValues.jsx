import { coreValues } from "../Constant";
import WelcomeBackground from "../../assets/images/Welcome-SHC-Background-Photo.jpg";
import Logo from "../../assets/LOGO.svg";

const CoreValues = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-auto"
      style={{
        backgroundImage: `url(${WelcomeBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="container mx-auto px-6 lg:px-12 relative text-center py-12 sm:py-16 md:py-20 ">
        <h2 className="text-4xl font-bold pb-16 text-white">CORE VALUES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="bg-white text-black p-6 rounded-lg shadow-lg relative"
            >
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-white font-bold rounded ${value.color}`}
              >
                {value.id}
              </div>
              <div className="text-5xl py-4">
                <img
                  src={value.icon}
                  alt={value.alt}
                  className="w-16 m-auto"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center px-5 py-3 bg-white w-fit mt-12 mx-auto rounded-xl">
        <img src={Logo} alt="Top pharma contract manufacturing in Surat" className=" w-28" />
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
