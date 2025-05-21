import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Portfolio data for mapping
const portfolioItems = [
  {
    id: 1,
    image: "/student-img.jpeg",
    client: "Learning Management System",
    url: "https://lmselite.com/"
  },
  {
    id: 2,
    image: "/digi-card-logo.webp",
    client: "Digital Visiting Card",
    url: "https://souldigicard.com/"
  }
];

export const DivWrapperByAnima = (): JSX.Element => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-8 sm:gap-14 py-20 sm:py-40 px-4 sm:px-8 md:px-14 w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute w-full h-[200px] sm:h-[300px] top-0 left-0 z-0 bg-gradient-to-b from-[rgba(10,10,10,1)] to-[rgba(0,0,0,1)]">
        <div className="relative h-[400px] sm:h-[665px] top-[-200px] sm:top-[-365px]">
          <div className="w-full max-w-[90%] sm:max-w-[960px] h-[400px] sm:h-[665px] mx-auto bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-14.png)] bg-cover bg-center" />
          <div className="absolute w-full h-[200px] sm:h-[300px] top-[200px] sm:top-[365px] left-0 border-t border-[#9e9e9e29]" />
        </div>
      </div>
      {/* Section header */}
      <div className="flex flex-col max-w-[90%] sm:max-w-[900px] items-center justify-center gap-4 sm:gap-[16.89px] relative z-[2]">
        <h2 className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-4xl sm:text-5xl md:text-[78px] text-center tracking-[-1px] sm:tracking-[-2px] leading-tight sm:leading-[81.9px] whitespace-nowrap">
          Our expertise at work
        </h2>
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-[90%] sm:max-w-[1200px] w-full relative z-[1]">
        {portfolioItems.map((item) => (
          <div key={item.id} className="group flex flex-col items-center relative w-full">
            <Card
              className="bg-[#1f1f1f] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border-none w-full relative cursor-pointer"
              onClick={() => handleClick(item.url)}
            >
              <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-4 relative">
                {/* Image section */}
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center rounded-xl relative"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Hover overlay text */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <span className="text-white font-medium text-center px-4 text-sm sm:text-base">
                      {item.client}
                    </span>
                  </div>
                </div>
                {/* Click to View text */}
                <div 
                  className="text-[#FFEED5] font-medium text-sm sm:text-base text-center w-full cursor-pointer"
                  onClick={() => handleClick(item.url)}
                >
                  Click to View
                </div>
              </CardContent>
            </Card>
            {/* Client name / View Project text below */}
            <div 
              className="flex items-center gap-2 mt-4 cursor-pointer"
              onClick={() => handleClick(item.url)}
            >
              <div className="text-[#FFEED5] font-medium group-hover:hidden text-sm sm:text-base">
                {item.client}
              </div>
              <div className="hidden group-hover:flex items-center gap-2">
                <div className="text-[#FFEED5] font-medium text-sm sm:text-base">
                  View Project
                </div>
                <img
                  src="/arrow-right-up-svgrepo-com.svg"
                  alt="Arrow"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};