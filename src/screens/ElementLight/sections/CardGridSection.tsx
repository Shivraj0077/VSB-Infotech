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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[900px] mx-auto">
      {items.map(({ id, title, description }, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            key={id}
            className="bg-[#1f1f1f] rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
            style={
              isLast
                ? {
                    gridColumn: "span 3",
                    justifySelf: "center",
                    maxWidth: "400px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }
                : undefined
            }
          >
            <h3 className="text-[#ffefd4] text-2xl font-semibold mb-3 font-['Urbanist']">
              {title}
            </h3>
            <p className="text-[#bcbdbf] font-light italic font-['Merriweather'] leading-relaxed">
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
    <section className="py-16 px-4 bg-[#121212]">
      <div className="max-w-[900px] mx-auto text-center mb-12">
        <h2 className="font-['Urbanist'] text-[#ffefd4] text-5xl md:text-[78px] leading-tight mb-4">
          Ideal For
        </h2>
        <p className="font-['Merriweather'] text-[#bcbdbf] text-xl font-light italic">
          Our solutions are perfect for professionals across various industries
        </p>
      </div>
      <CardGrid items={cardItems} />
    </section>
  );
};
