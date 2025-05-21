import React from "react";
import { Card } from "../../../../components/ui/card";
import { AcademicCapIcon, IdentificationIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export const SectionByAnima = (): JSX.Element => {
  const navigate = useNavigate();

  // Data for product cards
  const productCards = [
    {
      id: 1,
      iconComponent: <AcademicCapIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gohausdesignpapaya-whip" />,
      title: "Learning\nManagement System",
      paragraphs: [
        "Transform the way you learn and teach with our LMS software crafted for modern learning needs.",
        "Perfect for educational institutions, corporate training, e-learning platforms, and government organizations.",
        "Features include course management, assessment tools, gamification, multimedia support, and mobile learning.",
      ],
      bgImage: "/2ztm81mdcxemibswfvdh4x7jigg-png-2.png",
      route: "/products/lms"
    },
    {
      id: 2,
      iconComponent: <IdentificationIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gohausdesignpapaya-whip" />,
      title: "Digital\nVisiting Card",
      paragraphs: [
        "A modern, eco-friendly, and professional way to share your business information instantly.",
        "Smart design with contactless sharing via QR code, link, NFC, or WhatsApp—no app required!",
        "Ideal for entrepreneurs, freelancers, consultants, startups, retailers, and sales executives.",
      ],
      bgImage: "/2ztm81mdcxemibswfvdh4x7jigg-png-3.png",
      route: "/products/digital-visiting-card"
    },
  ];

  const handleClick = (route: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(route);
  };

  return (
    <section
      id="our-products" 
      className="flex flex-col items-center justify-center gap-8 sm:gap-14 py-20 sm:py-40 px-4 sm:px-8 md:px-14 relative overflow-hidden"
    >
      <header className="flex flex-col max-w-[90%] sm:max-w-[900px] items-center justify-center gap-4 sm:gap-[16.89px] z-[2]">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-4xl sm:text-5xl md:text-[78px] text-center tracking-[-1px] sm:tracking-[-2px] leading-tight sm:leading-[81.9px] whitespace-nowrap">
          Our Products
        </h2>
      </header>

      <div className="flex flex-col sm:flex-row max-w-[90%] sm:max-w-[1297px] items-center justify-center gap-8 sm:gap-16 md:gap-40 relative z-[1]">
        {productCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col w-full sm:w-[400px] h-[500px] sm:h-[600px] items-start justify-between pl-6 sm:pl-[35px] pr-4 sm:pr-[23.25px] py-6 sm:py-[33px] relative rounded-2xl overflow-hidden [background:linear-gradient(182deg,rgba(6,6,6,1)_0%,rgba(14,14,14,1)_100%)] border border-solid border-[#ffffff1a]"
          >
            <div className="flex flex-col items-start justify-center gap-4 sm:gap-[23.7px] relative self-stretch w-full flex-[0_0_auto] p-0">
              <div className="flex flex-col w-8 sm:w-10 items-start justify-center pt-0 pb-1 sm:pb-[3px] px-0 relative flex-[0_0_auto]">
                {card.iconComponent}
              </div>

              <h3 className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-xl sm:text-[26px] tracking-0 leading-8 sm:leading-[36.4px] whitespace-pre-line">
                {card.title}
              </h3>

              {card.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="relative w-fit [font-family:'Lexend',Helvetica] font-light text-gohausdesignsilver-sand text-sm sm:text-base tracking-[-0.30px] leading-6 sm:leading-[27.2px] whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <button 
              onClick={() => handleClick(card.route)}
              className="group flex items-center h-10 sm:h-[50px] px-4 sm:px-6 mx-auto mt-4 sm:mt-6 rounded-[55px] border-2 border-solid border-[#ffefd4] text-gohausdesignblack bg-gohausdesignpapaya-whip text-sm sm:text-base font-medium transition-all duration-300 relative overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-[#1A153D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="[font-family:'Lexend',Helvetica] leading-5 sm:leading-[27.2px] relative z-10 group-hover:text-gohausdesignpapaya-whip transition-colors duration-300">
                View Product
              </span>
              <div className="absolute -inset-1 rounded-[60px] opacity-0 group-hover:opacity-30 blur-md bg-[#1A153D] group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>

            <div className="absolute w-[300px] sm:w-[595px] h-[150px] sm:h-[266px] top-[350px] sm:top-[458px] left-[-50px] sm:left-[-98px] rounded-[430.71px] rotate-[-15deg] blur-[66px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)] opacity-30" />
            <div
              className={`w-[350px] sm:w-[673px] h-[230px] sm:h-[460px] top-[150px] sm:top-[230px] left-[-20px] sm:left-[-41px] opacity-50 bg-[url(${card.bgImage})] absolute bg-cover bg-[50%_50%]`}
            />
          </Card>
        ))}
      </div>

      <div className="absolute w-full h-[200px] sm:h-[300px] top-0 left-0 z-0 [background:linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)]">
        <div className="relative h-[400px] sm:h-[665px] top-[-200px] sm:top-[-365px]">
          <div className="w-[90%] sm:w-[960px] h-[400px] sm:h-[665px] top-0 left-1/2 -translate-x-1/2 bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-6.png)] absolute bg-cover bg-[50%_50%]" />
          <div className="absolute w-full h-[200px] sm:h-[300px] top-[200px] sm:top-[365px] left-0 border-t [border-top-style:solid] border-[#9e9e9e29]" />
        </div>
      </div>
    </section>
  );
};