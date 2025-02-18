import { services } from "../Constant";

const ContactUs = () => {
  return (
    <section className="flex flex-col w-full min-h-screen md:flex-row">
      {/* Left Form Section */}
      <div className="flex flex-col justify-center p-10 text-white bg-gray-900 md:w-1/2">
        <h2 className="mb-10 text-2xl font-bold md:text-3xl">
          Send Your Inquiry
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
          />
          <input
            type="email"
            placeholder="Your Email Address*"
            className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
          />
          <input
            type="text"
            placeholder="Address*"
            className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
          />
          <textarea
            placeholder="How can we help you?"
            className="w-full p-3 bg-transparent border-b border-gray-400 focus:outline-none focus:border-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-center text-gray-900 transition bg-white rounded-lg hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Feature Section */}
      <div className="flex flex-col justify-center p-10 bg-white md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold text-center md:text-3xl">
          Why SHC Pharma?
        </h2>
        <p className="mb-8 text-center text-gray-600">
          We are an emerging pharmaceutical company dedicated to providing
          innovative and affordable medications that promote healthier lives and
          meet the needs of our valued customers.
        </p>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 transition duration-300 border shadow-sm rounded-xl hover:shadow-md"
            >
              <img
                className="w-14 sm:w-20 md:w-24"
                src={item.image}
                alt={item.title}
              />
              <h3 className="mt-4 text-sm font-semibold text-center text-gray-700 sm:text-md">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
