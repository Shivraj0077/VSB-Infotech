import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ContainerByAnima = (): JSX.Element => {
  // Team member data for easier mapping
  const teamMembers = [
    {
      id: 1,
      name: "Marc Andrew",
      title: "25+ years design veteran. SaaS founder with successful exits",
      bio: [
        "After building Cabana, a design system used by thousands of designers and startups worldwide (including Sennheiser, Dolby, and Volvo before my six-figure exit), I know firsthand what moves the needle in SaaS businesses.",
        "This experience, plus design and business insights I've shared with 72K+ followers on Medium over 10 years, shows that success isn't just about pretty interfaces—it's about solving real business problems through smart design.",
        "I started Haus to help SaaS founders turn design into a growth engine instead of just a cost. Having been a founder myself, I tackle every project with both a designer's eye and a focus on the numbers that grow your business.",
      ],
      imageBg: "/2ztm81mdcxemibswfvdh4x7jigg-png-11.png",
      imageOverlay: "/image-background.png",
    },
    {
      id: 2,
      name: "Jacob Olenick",
      title: "Design systems expert. Code-savvy designer",
      bio: [
        "With over a decade creating digital experiences for both Fortune 500 companies and high-growth startups, I've mastered building design systems that scale well while driving user adoption.",
        "My work has powered products at Paramount+, CVS Health, Adobe, and Credit One Bank, where my design system got 100% stakeholder buy-in before coding even started.",
        "What makes me different is my ability to bridge design and development. For SaaS founders, this means I create designs that not only convert users but can be easily built by your engineering team, cutting development time and helping you scale faster.",
      ],
      imageBg: "/2ztm81mdcxemibswfvdh4x7jigg-png-12.png",
      imageOverlay: "/image-background-1.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-14 py-40 px-[30px] relative">
      {/* Background gradient at the top */}
      <div className="absolute w-full h-[300px] top-0 left-0 z-0 bg-gradient-to-b from-[rgba(10,10,10,1)] to-[rgba(0,0,0,1)]">
        <div className="relative h-[665px] top-[-365px]">
          <div className="w-[960px] h-[665px] mx-auto bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-13.png)] bg-cover bg-center" />
          <Separator className="absolute w-full top-[365px] opacity-20" />
        </div>
      </div>

      {/* Section header */}
      <div className="flex flex-col max-w-[900px] items-center justify-center gap-[16.89px] relative z-[2]">
        <h2 className="font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[78px] text-center tracking-[-2.00px] leading-[81.9px]">
          Meet Team Haus
        </h2>
        <p className="bg-gradient-to-r from-[rgba(207,156,255,1)] to-[rgba(240,224,255,0.8)] bg-clip-text text-transparent opacity-70 font-['Merriweather',Helvetica] font-light italic text-xl text-center tracking-[-0.30px] leading-[34px]">
          Not just an agency—The design partners you've been looking for
        </p>
      </div>

      {/* Team members container */}
      <div className="flex flex-col max-w-[1300px] w-full items-center justify-center gap-[136px] relative z-[1]">
        {/* Map through team members */}
        {teamMembers.map((member, index) => (
          <Card
            key={member.id}
            className="flex max-w-[1240px] w-full items-center justify-between relative bg-transparent border-0 shadow-none"
          >
            {/* For the first member, image on left, bio on right */}
            {index === 0 ? (
              <>
                <div className="flex flex-col w-[558px] items-start justify-center relative">
                  <div className="relative self-stretch w-full h-[513px] bg-gohausdesignrangoon-green rounded-[50px] overflow-hidden">
                    <div className="relative w-[1198px] h-[831px] top-[-318px] left-[-321px]">
                      <div className="w-[1198px] h-[830px] top-0 left-0 opacity-70 bg-[url(${member.imageBg})] absolute bg-cover bg-center" />
                      <div className="absolute w-[558px] h-[513px] top-[318px] left-80 bg-[url(${member.imageOverlay})] bg-cover bg-center" />
                      <div className="absolute w-[558px] h-[108px] top-[723px] left-80 bg-gradient-to-b from-transparent to-black" />
                    </div>
                  </div>
                </div>

                <CardContent className="flex flex-col w-[570.39px] items-start gap-4 p-0">
                  <div className="flex flex-col items-start justify-center gap-[3px] pb-[0.59px] w-full">
                    <h3 className="font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[50px] tracking-[-0.10px] leading-[65px]">
                      {member.name}
                    </h3>
                    <p className="bg-gradient-to-r from-[rgba(207,156,255,1)] to-[rgba(240,224,255,0.8)] bg-clip-text text-transparent opacity-70 font-['Merriweather',Helvetica] font-light italic text-lg tracking-[-0.30px] leading-[30.6px]">
                      {member.title}
                    </p>
                  </div>

                  <div className="w-full space-y-8">
                    {member.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        className={`font-['Lexend',Helvetica] text-white text-lg leading-[32.4px] ${
                          i === 0
                            ? "font-normal"
                            : "font-light opacity-80 tracking-[-0.30px]"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>

                {/* Purple gradient effect */}
                <div className="w-[578px] h-[258px] top-[177px] left-11 rounded-[418.23px] rotate-[-104.06deg] blur-[66px] opacity-40 absolute bg-[radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />
              </>
            ) : (
              <>
                {/* For the second member, bio on left, image on right */}
                <CardContent className="flex flex-col w-[570.39px] items-start gap-4 p-0">
                  <div className="flex flex-col items-start justify-center gap-[3px] pb-[0.59px] w-full">
                    <h3 className="font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[50px] tracking-[-0.10px] leading-[65px]">
                      {member.name}
                    </h3>
                    <p className="bg-gradient-to-r from-[rgba(207,156,255,1)] to-[rgba(240,224,255,0.8)] bg-clip-text text-transparent opacity-70 font-['Merriweather',Helvetica] font-light italic text-lg tracking-[-0.30px] leading-[30.6px]">
                      {member.title}
                    </p>
                  </div>

                  <div className="w-full space-y-8">
                    {member.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        className={`font-['Lexend',Helvetica] text-white text-lg leading-[32.4px] ${
                          i === 0
                            ? "font-normal"
                            : "font-light opacity-80 tracking-[-0.30px]"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>

                <div className="flex flex-col w-[558px] items-start justify-center relative">
                  <div className="relative self-stretch w-full h-[513px] bg-gohausdesignrangoon-green rounded-[50px] overflow-hidden">
                    <div className="relative w-[1198px] h-[831px] top-[-318px] left-[-321px]">
                      <div className="w-[1198px] h-[830px] top-0 left-0 opacity-70 bg-[url(${member.imageBg})] absolute bg-cover bg-center" />
                      <div className="absolute w-[558px] h-[513px] top-[318px] left-80 bg-[url(${member.imageOverlay})] bg-cover bg-center" />
                      <div className="absolute w-[558px] h-[108px] top-[723px] left-80 bg-gradient-to-b from-transparent to-black" />
                    </div>
                  </div>
                </div>

                {/* Purple gradient effect */}
                <div className="w-[578px] h-[258px] top-[97px] left-[751px] rounded-[418.23px] rotate-[-104.06deg] blur-[66px] opacity-40 absolute bg-[radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />
              </>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
