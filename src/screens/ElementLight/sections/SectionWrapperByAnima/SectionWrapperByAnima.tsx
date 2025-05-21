import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the data for the growth stage cards
const growthStageCards = [
  {
    id: 1,
    title: "MVP",
    icon: "/component-1-38.svg",
    description: [
      "Design that gets you to market faster",
      "and helps you attract investors. We focus",
      "on the core features that prove your idea",
      "works while setting you up for growth.",
    ],
    backgroundImage: "/2ztm81mdcxemibswfvdh4x7jigg-png-7.png",
  },
  {
    id: 2,
    title: "Seed",
    icon: "/component-1-55.svg",
    description: [
      "Convert more users and lower churn",
      "rates. We help turn your key numbers",
      "green and make investors eager to fund",
      "your next growth phase.",
    ],
    backgroundImage: "/2ztm81mdcxemibswfvdh4x7jigg-png-8.png",
  },
  {
    id: 3,
    title: "Growth",
    icon: "/component-1-35.svg",
    description: [
      "Add features without breaking what",
      "works. We help you scale smoothly,",
      "improve revenue streams, and keep your",
      "growing user base happy.",
    ],
    backgroundImage: "/2ztm81mdcxemibswfvdh4x7jigg-png-9.png",
  },
];

export const SectionWrapperByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-14 px-14 py-40 relative">
      <header className="flex flex-col max-w-[900px] items-center justify-center gap-4 relative z-[2]">
        <div className="relative w-full text-center">
          <h2 className="font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[78px] tracking-[-2.00px] leading-[81.9px]">
            From MVP to unicorn:
            <br />
            design that grows with you
          </h2>
        </div>

        <p className="relative w-fit [background:linear-gradient(90deg,rgba(207,156,255,1)_0%,rgba(240,224,255,0.8)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-70 [font-family:'Merriweather',Helvetica] font-light italic text-transparent text-xl text-center tracking-[-0.30px] leading-[34px] whitespace-nowrap">
          Solutions for wherever you are in your SaaS journey—and where
          you&#39;re going next
        </p>
      </header>

      <div className="flex max-w-[1297px] items-center justify-center gap-4 relative z-[1]">
        {growthStageCards.map((card) => (
          <Card
            key={card.id}
            className="w-[421.67px] bg-gohausdesignblack rounded-2xl shadow-[0px_1px_39px_#431f6940] overflow-hidden border border-solid border-[#ffffff1a]"
          >
            <CardContent className="px-[41px] py-[33px] relative">
              <div className="flex flex-col items-start justify-center gap-[23px] relative w-full">
                <div className="inline-flex items-center justify-center pt-3 pb-[11px] px-3 relative bg-gohausdesignwhite-15 rounded-[100px] overflow-hidden">
                  <img
                    className="relative self-stretch w-[30px]"
                    alt={`${card.title} icon`}
                    src={card.icon}
                  />
                  <div className="w-[54px] h-[53px] left-0 rounded-[100px] border-2 border-solid border-[#ffefd4] absolute top-0" />
                </div>

                <h3 className="relative w-fit [font-family:'Urbanist',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[50.4px] whitespace-nowrap">
                  {card.title}
                </h3>

                <p className="relative w-fit [font-family:'Lexend',Helvetica] font-light text-gohausdesignsilver-sand text-lg tracking-[-0.30px] leading-[32.4px]">
                  {card.description.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < card.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {/* Gradient effect */}
              <div className="w-[705px] h-[315px] top-[232px] left-[-98px] rounded-[509.89px] rotate-[-15deg] blur-[66px] opacity-30 absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />

              {/* Background image */}
              <div
                className="w-[783px] h-[541px] top-[-27px] left-[-41px] opacity-50 absolute bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute w-full h-[300px] top-0 left-0 z-0 [background:linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)]">
        <div className="relative h-[665px] top-[-365px]">
          <div className="w-[960px] h-[665px] top-0 left-1/2 -translate-x-1/2 bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-10.png)] absolute bg-cover bg-[50%_50%]" />
          <div className="absolute w-full h-[300px] top-[365px] left-0 border-t [border-top-style:solid] border-[#9e9e9e29]" />
        </div>
      </div>
    </section>
  );
};
