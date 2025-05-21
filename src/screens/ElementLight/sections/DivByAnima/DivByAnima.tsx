import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

// Define feature lists for each pricing tier
const catalystFeatures = [
  "High-converting landing page design",
  "Complete Figma design files",
  "Optional Framer No-Code build",
  "Senior Designers",
  "Perfect for pre-seed and seed-stage startups",
  "NDA contract if requested",
];

const growthFeatures = [
  "High-converting landing page design",
  "High-converting multi-page designs",
  "Web & mobile app UI/UX design",
  "Conversion-focused Copywriting",
  "Custom Design Systems",
  "Average 48 hour delivery",
  "Unlimited Brands",
  "Bi-weekly meetings",
  "Developer-ready Figma files",
  "Framer Development",
  "Senior Designers",
  "Pause or Cancel anytime",
  "Perfect for funded startups",
  "NDA contract if requested",
];

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Header Section */}
      <div className="w-full relative">
        <div className="w-full h-[300px] [background:linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)] border-t border-[#9e9e9e29]">
          <div className="relative">
            <div className="w-full max-w-[960px] h-[665px] mx-auto bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-20.png)] bg-cover bg-center absolute top-[-365px]" />
          </div>
        </div>

        <div className="flex flex-col max-w-[900px] w-full mx-auto items-center justify-center gap-4 relative z-10 text-center py-16">
          <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[78px] tracking-[-2.00px] leading-[81.9px]">
            Two paths to
            <br />
            better conversions
          </h2>
          <p className="w-fit [background:linear-gradient(90deg,rgba(207,156,255,1)_0%,rgba(240,224,255,0.8)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-70 [font-family:'Merriweather',Helvetica] font-light italic text-transparent text-xl tracking-[-0.30px] leading-[34px]">
            Select the design partnership that fits your SaaS journey
          </p>
        </div>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-7xl mx-auto px-4">
        {/* Conversion Catalyst Card */}
        <Card className="w-full md:w-[538px] bg-neutral-950 rounded-3xl border border-[#9e9e9e29] text-white">
          <CardContent className="p-8">
            <div className="mb-6">
              <h3 className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignperfume text-[28px] tracking-[-0.84px] leading-[33.6px]">
                Conversion Catalyst - One Time
              </h3>
              <p className="[font-family:'Merriweather',Helvetica] font-light italic text-gohausdesignsilver-sand text-[17px] tracking-[-0.51px] leading-[27.2px] mt-4">
                Launch with impact and clarity.
                <br />
                Perfect for early-stage founders who need
                <br />a high-converting landing page to attract users and
                investors.
              </p>
            </div>

            <div className="flex items-end mt-8 mb-6">
              <span className="font-gohaus-design-semantic-heading-3 font-[number:var(--gohaus-design-semantic-heading-3-font-weight)] text-gohausdesignwhite-90 text-[length:var(--gohaus-design-semantic-heading-3-font-size)] tracking-[var(--gohaus-design-semantic-heading-3-letter-spacing)] leading-[var(--gohaus-design-semantic-heading-3-line-height)] [font-style:var(--gohaus-design-semantic-heading-3-font-style)]">
                $3,495
              </span>
              <span className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignwhite-90 text-[28px] tracking-[-0.84px] leading-[33.6px] ml-2">
                /one-time
              </span>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              {catalystFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckIcon className="h-3.5 w-3.5 text-white" />
                  <span className="[font-family:'Lexend',Helvetica] font-light text-white text-base tracking-[-0.48px] leading-[22.4px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="px-8 pb-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Button className="w-[263px] h-[51px] bg-gohausdesignpapaya-whip text-gohausdesignblack rounded-[55px] border-2 border-[#ffefd4] relative">
                <div className="absolute w-[39px] h-[39px] top-1.5 left-[7px] rounded-[34px] overflow-hidden bg-[url(/imjdzjvg5ezz2vxnu5rnw1h7t8-png-1.png)] bg-cover bg-center" />
                <span className="ml-10 [font-family:'Lexend',Helvetica] font-normal text-base">
                  Book an intro with Marc
                </span>
              </Button>
              <span className="[font-family:'Merriweather',Helvetica] font-light italic text-white text-sm tracking-[-0.42px] leading-[22.4px]">
                Quick chat. No pressure.
              </span>
            </div>
          </CardFooter>
        </Card>

        {/* Growth Partner Card */}
        <Card className="w-full md:w-[538px] bg-gohausdesigncod-gray rounded-3xl border border-[#9e9e9e29] text-white relative mt-8 md:mt-[-152px]">
          <div className="w-[578px] h-[258px] absolute bottom-0 right-[-40px] rounded-[418.23px] rotate-[-15deg] blur-[66px] opacity-30 [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />

          <Badge className="absolute top-6 left-8 bg-gohausdesignheliotrope text-gohausdesignwhite-90 rounded-md">
            <span className="[font-family:'Merriweather',Helvetica] font-light italic text-base tracking-[-0.48px] leading-[22.4px]">
              Most Popular
            </span>
          </Badge>

          <CardContent className="p-8 pt-16 relative z-10">
            <div className="mb-6">
              <h3 className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignperfume text-[28px] tracking-[-0.84px] leading-[33.6px]">
                Growth Partner - Monthly Retainer
              </h3>
              <p className="[font-family:'Merriweather',Helvetica] font-light italic text-gohausdesignsilver-sand text-[17px] tracking-[-0.51px] leading-[27.2px] mt-4">
                Your dedicated design partner for continuous growth.
                <br />
                Ideal for funded startups ready to scale through
                <br />
                strategic design that converts.
              </p>
            </div>

            <div className="flex items-end mt-8 mb-6">
              <span className="font-gohaus-design-semantic-heading-3 font-[number:var(--gohaus-design-semantic-heading-3-font-weight)] text-gohausdesignwhite-90 text-[length:var(--gohaus-design-semantic-heading-3-font-size)] tracking-[var(--gohaus-design-semantic-heading-3-letter-spacing)] leading-[var(--gohaus-design-semantic-heading-3-line-height)] [font-style:var(--gohaus-design-semantic-heading-3-font-style)]">
                $5,995
              </span>
              <span className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignwhite-90 text-[26px] tracking-[-0.78px] leading-[31.2px] ml-2">
                /mo
              </span>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              {growthFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckIcon className="h-3.5 w-3.5 text-white" />
                  <span className="[font-family:'Lexend',Helvetica] font-light text-white text-base tracking-[-0.48px] leading-[22.4px]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="px-8 pb-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Button className="w-[263px] h-[50px] bg-gohausdesignpapaya-whip text-gohausdesignblack rounded-[55px] border-2 border-[#ffefd4] relative">
                <div className="absolute w-[39px] h-[39px] top-1.5 left-[7px] rounded-[34px] overflow-hidden bg-[url(/imjdzjvg5ezz2vxnu5rnw1h7t8-png-2.png)] bg-cover bg-center" />
                <span className="ml-10 [font-family:'Lexend',Helvetica] font-normal text-base">
                  Book an intro with Marc
                </span>
              </Button>
              <span className="[font-family:'Merriweather',Helvetica] font-light italic text-white text-sm tracking-[-0.42px] leading-[22.4px]">
                Quick chat. No pressure.
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center gap-2 mt-16">
        <div className="w-[120px] h-9 bg-[url(/link---3pnjqphovvssvwmw3euyyommqw-png.png)] bg-cover bg-center" />
        <p className="font-gohaus-design-merriweather-light-italic font-[number:var(--gohaus-design-merriweather-light-italic-font-weight)] [font-style:var(--gohaus-design-merriweather-light-italic-font-style)] text-gohausdesignsilver-sand text-[length:var(--gohaus-design-merriweather-light-italic-font-size)] text-center tracking-[var(--gohaus-design-merriweather-light-italic-letter-spacing)] leading-[var(--gohaus-design-merriweather-light-italic-line-height)]">
          2% of each payment is donated to Stripe Climate
        </p>
      </div>
    </section>
  );
};
