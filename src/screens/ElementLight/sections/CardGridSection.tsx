import React from "react";

const cardItems = [
  {
    id: 1,
    title: "Entrepreneurs",
    description:
      "Perfect for business owners looking to establish a strong digital presence and grow their ventures.",
  },
  {
    id: 2,
    title: "Freelancers",
    description:
      "Ideal for independent professionals who want to showcase their skills and attract high-quality clients.",
  },
  {
    id: 3,
    title: "Consultants",
    description:
      "Great for advisors and specialists who need to establish credibility and communicate their expertise.",
  },
  {
    id: 4,
    title: "Startups",
    description:
      "Essential for new ventures looking to make an impact and attract investors with a professional online presence.",
  },
  {
    id: 5,
    title: "Retailers",
    description:
      "Perfect for shops and stores that want to enhance their brand and expand their customer reach.",
  },
  {
    id: 6,
    title: "Service Providers",
    description:
      "Ideal for professionals offering services who need to build trust and showcase their offerings.",
  },
  {
    id: 7,
    title: "Sales Executives",
    description:
      "Great for sales professionals looking to establish personal branding and expand their network.",
  },
];

const CardGrid = ({ items }: { items: typeof cardItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      {items.map(({ id, title, description }, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            key={id}
            className={`bg-[#1f1f1f] rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-default ${
              isLast ? "sm:col-span-2 lg:col-span-3 max-w-[600px] mx-auto" : ""
            }`}
          >
            <h3 className="text-[#ffefd4] text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 font-['Urbanist']">
              {title}
            </h3>
            <p className="text-[#bcbdbf] text-sm sm:text-base font-light italic font-['Merriweather'] leading-relaxed">
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export const CardGridSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
      <div className="max-w-[1200px] mx-auto text-center mb-8 sm:mb-12">
        <h2 className="font-['Urbanist'] text-[#ffefd4] text-3xl sm:text-5xl lg:text-[78px] leading-tight mb-3 sm:mb-4">
          Ideal For
        </h2>
        <p className="font-['Merriweather'] text-[#bcbdbf] text-base sm:text-lg lg:text-xl font-light italic max-w-2xl mx-auto">
          Our solutions are perfect for professionals across various industries
        </p>
      </div>
      <CardGrid items={cardItems} />
    </section>
  );
};
