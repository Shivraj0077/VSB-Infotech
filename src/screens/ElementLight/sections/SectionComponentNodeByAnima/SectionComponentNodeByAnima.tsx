import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionComponentNodeByAnima = (): JSX.Element => {
  // Service data for mapping
  const services = [
    { id: 1, name: "Landing Pages", icon: "/component-1-33.svg" },
    { id: 2, name: "Copywriting", icon: "/component-1-25.svg" },
    { id: 3, name: "Design Systems", icon: "/component-1-48.svg" },
    { id: 4, name: "Web App Design", icon: "/component-1-49.svg" },
    { id: 5, name: "Mobile App Design", icon: "/component-1-52.svg" },
    { id: 6, name: "Framer Development", icon: "/component-1-31.svg" },
    { id: 7, name: "Conversion Optimisation", icon: "/component-1-47.svg" },
    { id: 8, name: "UX Strategy", icon: "/component-1-50.svg" },
    { id: 9, name: "Implementation Support", icon: "/component-1-41.svg" },
  ];

  // Group services into rows for layout
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3, 6);
  const thirdRow = services.slice(6, 9);

  return (
    <section className="relative w-full py-16">
      {/* Background and hero section */}
      <div className="w-full">
        <div className="w-full h-[300px] [background:linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)] border-t border-[#9e9e9e29]">
          <div className="relative h-[300px]">
            <div className="absolute top-[-365px] left-1/2 transform -translate-x-1/2 w-[960px] h-[665px] bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-24.png)] bg-cover bg-center" />
          </div>
        </div>

        {/* Heading and subtitle */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-[900px] mx-auto text-center -mt-[140px]">
          <h2 className="font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[78px] tracking-[-2.00px] leading-[81.9px]">
            Services made for
            <br />
            your journey
          </h2>
          <p className="[background:linear-gradient(90deg,rgba(207,156,255,1)_0%,rgba(240,224,255,0.8)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-70 font-['Merriweather',Helvetica] font-light italic text-xl tracking-[-0.30px] leading-[34px]">
            Design services built just for SaaS success
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col items-center mt-16 gap-7">
          {/* First row */}
          <div className="flex flex-wrap justify-center gap-4">
            {firstRow.map((service) => (
              <Card
                key={service.id}
                className="bg-[#1c1c1c] border border-solid border-[#ffefd41a] rounded-lg overflow-hidden"
              >
                <CardContent className="flex items-center p-0">
                  <div className="flex items-center h-[54px] px-4 py-0">
                    <img
                      className="w-[30px] h-[30px]"
                      alt={`${service.name} icon`}
                      src={service.icon}
                    />
                    <span className="ml-2 font-gohaus-design-urbanist-regular text-gohausdesignpapaya-whip text-[23px] tracking-[-0.600000023841858px] leading-[34.5px] whitespace-nowrap">
                      {service.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row */}
          <div className="flex flex-wrap justify-center gap-4">
            {secondRow.map((service) => (
              <Card
                key={service.id}
                className="bg-[#1c1c1c] border border-solid border-[#ffefd41a] rounded-lg overflow-hidden"
              >
                <CardContent className="flex items-center p-0">
                  <div className="flex items-center h-[54px] px-4 py-0">
                    <img
                      className="w-[30px] h-[30px]"
                      alt={`${service.name} icon`}
                      src={service.icon}
                    />
                    <span className="ml-2 font-gohaus-design-urbanist-regular text-gohausdesignpapaya-whip text-[23px] tracking-[-0.600000023841858px] leading-[34.5px] whitespace-nowrap">
                      {service.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Third row */}
          <div className="flex flex-wrap justify-center gap-4">
            {thirdRow.map((service) => (
              <Card
                key={service.id}
                className="bg-[#1c1c1c] border border-solid border-[#ffefd41a] rounded-lg overflow-hidden"
              >
                <CardContent className="flex items-center p-0">
                  <div className="flex items-center h-[54px] px-4 py-0">
                    <img
                      className="w-[30px] h-[30px]"
                      alt={`${service.name} icon`}
                      src={service.icon}
                    />
                    <span className="ml-2 font-gohaus-design-urbanist-regular text-gohausdesignpapaya-whip text-[23px] tracking-[-0.600000023841858px] leading-[34.5px] whitespace-nowrap">
                      {service.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
