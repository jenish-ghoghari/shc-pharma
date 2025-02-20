import { manufacturingProcessData } from "../Constant";
import Image from "../../assets/images/OverviewOfTheThirdPartyPharmaManufacturingProcess.png";
export default function ManufacturingProcess() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 ">
      <div className="flex flex-col sm:flex-row  items-center gap-10 md:w-[90%] mx-auto">
        <div className="w-full sm:w-1/6">
          <img src={Image} alt="" className="w-[100px] mx-auto md:w-full" />
        </div>
        <div className="w-full sm:w-2/2 text-left">
          <h2 className="text-xl md:text-4xl font-bold  text-gray-900">
            Overview of the Third-Party Pharma Manufacturing Process{" "}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-2">
            The typical time frame for manufacturing a completely new product is
            around 35-40 days, while manufacturing an already established
            product takes about 45-50 days. The steps involved are as follows:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {manufacturingProcessData.map((step, index) => (
          <div
            key={index}
            className="bg-purple-500 text-white p-8 rounded-lg shadow-md relative"
          >
            <span className="-left-3 -top-3 flex flex-col items-center justify-center bg-black text-white w-12 h-12 rounded-full text-xs font-bold absolute">
              <span>Step</span>
              <span>{step.id}</span>
            </span>
            <div className="pb-2 border-b-2 border-white">
              <h3 className="font-semibold text-md md:text-xl text-end">
                {step.title}
              </h3>
            </div>
            <p className="text-sm md:text-md mt-2">{step.description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-12">
        Required Documents for Third-Party Pharma Manufacturing
      </h3>
      <p className="text-gray-600 mt-2">
        To begin the third-party pharma manufacturing process, the following
        documents are required from the client: :
      </p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>Drug License</li>
        <li>GST Registration Certificate</li>
        <li>Marketing Company Logo</li>
        <li>Marketing Company’s official address for labeling on products</li>
        <li>Agreement between the marketing and manufacturing companies</li>
      </ul>
    </section>
  );
}
