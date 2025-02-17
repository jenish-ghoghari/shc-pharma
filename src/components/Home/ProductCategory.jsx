import { Link } from "react-router-dom";
import { productCategories } from "../Constant";

const ProductCategory = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12  py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        <div className="text-center md:text-left">
          <p className="text-3xl md:text-5xl font-semibold">
            Our Product Categories
          </p>
        </div>
        <div className="sm:col-span-2 md:col-span-3 text-justify">
          <p className="text-base md:text-lg font-medium leading-relaxed">
            Our product range includes tablets, capsules, syrups, and external
            preparations like ointments and creams, all adhering to strict
            quality standards for safety and efficacy. Focused on continuous
            innovation and patient well-being, SHC Pharmaceuticals aims to be a
            trusted healthcare partner.
          </p>
        </div>
      </div>

      <div className="pt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {productCategories.map((data, index) => (
          <Link
            key={index}
            to={data.url}
            alt={data.title}
            className="flex flex-col bg-white overflow-hidden w-full"
          >
            <div className="h-auto overflow-hidden relative group">
              <img
                src={data.image}
                alt="card-image"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="py-4">
              <h6 className="mb-2 text-slate-800 text-sm lg:text-lg font-semibold">
                {data.title}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
