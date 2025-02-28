import ThirdPartyManufacturing from "../../assets/images/ThirdPartyManufacturing2.jpg";

const InfoSection = () => {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white overflow-hidden">
        {/* Image Section */}
        <div>
          <img
            src={ThirdPartyManufacturing}
            alt="Best Third Party Manufacturing in World"
            className="w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <p className="text-center md:text-left text-md md:text-lg leading-relaxed">
            If you&apos;re looking to start your own company with minimal
            investment and establish your brand in pharmaceuticals products,
            you&apos;ve come to the right place. SHC Pharmaceuticals, a leading
            third-party pharma manufacturing company in India, offers Pharma
            Contract Manufacturing services to renowned pharmaceutical
            companies. We aim to make the outsourcing process simple, flexible,
            and transparent for all our clients in the pharmaceutical industry.
          </p>
          <p className="text-center md:text-left text-md md:text-lg leading-relaxed">
            Third Party Pharma Manufacturing involves redistributing
            pharmaceutical products or having products produced at another
            company&apos;s manufacturing facility with your brand name on them.
            In other words, Third Party Pharma Manufacturing, also known as
            Contract Manufacturing, refers to producing goods under your brand
            or company name at another company&apos;s manufacturing unit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
