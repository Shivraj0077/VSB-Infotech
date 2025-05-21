import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContainerWrapperByAnima = (): JSX.Element => {
  // Data for the large cards
  const largeCards = [
    {
      id: 1,
      logoUrl: "/3lugvdj7grzensyeofajtqs1dq4-png.png",
      title: "35% Revenue Increase",
      description:
        "Complete redesign of streaming experience across multiple platforms led by Jacob over a 3 month period, meeting tight timeline goals.",
      backgroundUrl: "/2ztm81mdcxemibswfvdh4x7jigg-png-15.png",
    },
    {
      id: 2,
      logoUrl: "/i82il7xs7xqaycepwwxmj4jw4c-png.png",
      title: "100% Stakeholder Buy-In",
      description:
        "Jacob took the Credit One design system from 0-1 and made all the key decisions. Stakeholders were bought in 100% before the design system was fully built.",
      backgroundUrl: "/2ztm81mdcxemibswfvdh4x7jigg-png-16.png",
    },
  ];

  // Data for the small cards
  const smallCards = [
    {
      id: 1,
      logoUrl: "/blan8ufte6e13doablfvvheqyrm-png.png",
      title: "Recognised Design Authority",
      description:
        "Marc's insights on design that converts have attracted over 72,000 followers on Medium, making him a trusted expert whose practical approaches are widely used by professionals.",
    },
    {
      id: 2,
      logoComponent: (
        <div className="flex flex-col w-[134.53px] h-[40.91px] items-start justify-center py-[11.52px]">
          <img
            className="w-[134.53px] h-[17.87px]"
            alt="Component"
            src="/component-1-14.svg"
          />
        </div>
      ),
      title: "40% Efficiency Boost",
      description:
        "Jacob's thorough and strategic design system dramatically increased workflow efficiency for CVS Health's pharmacy applications team, resulting in a 40% efficiency boost.",
    },
    {
      id: 3,
      logoUrl: "/xc9kwb3gd3kfr2a2qheu5xyvwfi-png.png",
      title: "Achieved Six-Figure SaaS Exit",
      description:
        "Marc's strategic design approach helped build and scale a successful SaaS product that achieved a six-figure acquisition. He understands both sides: creating designs that convert and building products that sell.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-14 py-40 px-4 md:px-14 relative overflow-hidden">
      <header className="flex flex-col max-w-[900px] items-center justify-center gap-4 relative z-[2]">
        <div className="flex flex-col items-center pb-[0.83px]">
          <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-5xl md:text-[78px] text-center tracking-[-2.00px] leading-[81.9px]">
            Some numbers
            <br />
            we&#39;re proud of
          </h2>
        </div>

        <p className="w-fit [background:linear-gradient(90deg,rgba(207,156,255,1)_0%,rgba(240,224,255,0.8)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-70 [font-family:'Merriweather',Helvetica] font-light italic text-transparent text-xl text-center tracking-[-0.30px] leading-[34px] whitespace-nowrap">
          It&#39;s not just about the pixels where we&#39;re from
        </p>
      </header>

      <div className="flex flex-col max-w-[1297px] w-full items-center justify-center gap-6 relative z-[1]">
        {/* Large cards row */}
        <div className="flex flex-col md:flex-row w-full items-start justify-center gap-6">
          {largeCards.map((card) => (
            <Card
              key={card.id}
              className="w-full md:w-[636.5px] pt-[60px] pb-[68px] px-10 bg-[#1c1c1c] rounded-[32px] shadow-[0px_10px_8px_-3.75px_#0000003b,0px_2.29px_1.83px_-2.5px_#00000091,0px_0.6px_0.48px_-1.25px_#000000a6] relative overflow-hidden border border-solid border-[#ffefd41a]"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-start justify-center gap-6 relative w-full">
                  <div
                    className="w-40 h-[48.64px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${card.logoUrl})` }}
                  />

                  <div className="flex flex-col w-full md:w-[528.67px] items-start justify-center gap-[15.09px]">
                    <h3 className="mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-4xl md:text-[52px] tracking-[-2.00px] leading-[59.8px]">
                      {card.title}
                    </h3>

                    <p className="opacity-70 [font-family:'Lexend',Helvetica] font-normal text-white text-base tracking-[0] leading-[27.2px]">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div
                  className="w-full md:w-[1185px] h-[821px] top-[-47px] left-[-618px] absolute bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${card.backgroundUrl})` }}
                />

                <div className="w-full md:w-[578px] h-[258px] top-[157px] left-[196px] rounded-[418.23px] rotate-[-15deg] blur-[45px] opacity-30 absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Small cards row */}
        <div className="flex flex-col md:flex-row w-full items-start justify-center gap-6">
          {smallCards.map((card) => (
            <Card
              key={card.id}
              className="w-full md:w-[416.33px] gap-8 pt-[60px] pb-[68px] px-10 bg-neutral-900 rounded-[32px] shadow-[0px_10px_8px_-3.75px_#0000003b,0px_2.29px_1.83px_-2.5px_#00000091,0px_0.6px_0.48px_-1.25px_#000000a6] relative overflow-hidden border border-solid border-[#ffefd41a]"
            >
              <CardContent className="p-0 flex flex-col gap-8">
                {card.logoUrl ? (
                  <div
                    className="w-[134.53px] h-[40.91px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${card.logoUrl})` }}
                  />
                ) : (
                  card.logoComponent
                )}

                <div className="w-full md:w-[319.5px]">
                  <div className="flex flex-col w-full md:w-80 items-start">
                    <h3 className="mt-[-1.00px] font-gohaus-design-semantic-heading-1 font-[number:var(--gohaus-design-semantic-heading-1-font-weight)] text-gohausdesignpapaya-whip text-[length:var(--gohaus-design-semantic-heading-1-font-size)] tracking-[var(--gohaus-design-semantic-heading-1-letter-spacing)] leading-[var(--gohaus-design-semantic-heading-1-line-height)] [font-style:var(--gohaus-design-semantic-heading-1-font-style)]">
                      {card.title}
                    </h3>
                  </div>

                  <div className="mt-[120px] opacity-70 [font-family:'Lexend',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-[25.5px]">
                    {card.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute w-full h-[300px] top-0 left-0 z-0 [background:linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)]">
        <div className="relative h-[665px] top-[-365px]">
          <div className="w-[960px] h-[665px] top-0 left-[480px] bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-17.png)] absolute bg-cover bg-[50%_50%]" />
          <div className="absolute w-full h-[300px] top-[365px] left-0 border-t [border-top-style:solid] border-[#9e9e9e29]" />
        </div>
      </div>
    </section>
  );
};
