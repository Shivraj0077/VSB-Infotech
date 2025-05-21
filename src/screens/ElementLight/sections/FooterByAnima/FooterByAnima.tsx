import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterByAnima = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-white overflow-hidden">
      {/* Main footer content section */}
      <div className="flex flex-col w-full items-center justify-center gap-7 pt-40 pb-[58px] px-[30px] relative z-[2] bg-gohausdesignblack">
        <div className="relative max-w-[900px] w-full h-auto z-[2]">
          {/* Heading */}
          <div className="flex flex-col w-full items-center">
            <h2 className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[92px] text-center tracking-[-2.20px] leading-[92px]">
              Ready to bring
              <br />
              it home?
            </h2>
          </div>

          {/* Subtitle with gradient text */}
          <div className="flex flex-col items-center mt-[30px]">
            <p className="[background:linear-gradient(90deg,rgba(207,156,255,1)_0%,rgba(240,224,255,0.8)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-70 font-['Merriweather',Helvetica] font-light italic text-transparent text-xl text-center tracking-[-0.30px] leading-[34px]">
              Let&#39;s chat about your needs and see how Haus
            </p>
            <p className="[background:linear-gradient(90deg,rgba(207,156,255,1)_0%,rgba(240,224,255,0.8)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-70 font-['Merriweather',Helvetica] font-light italic text-transparent text-xl text-center tracking-[-0.30px] leading-[34px]">
              can help you improve, starting today
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          className="relative w-[262.8px] h-[50px] z-[1] bg-gohausdesignpapaya-whip rounded-[55px] overflow-hidden hover:bg-gohausdesignpapaya-whip/90 p-0"
          variant="ghost"
        >
          <div className="relative w-full h-full flex items-center">
            <div className="absolute w-[39px] h-[39px] top-1.5 left-[7px] rounded-[34px] overflow-hidden bg-[url(/imjdzjvg5ezz2vxnu5rnw1h7t8-png-3.png)] bg-cover bg-[50%_50%]">
              <img
                className="absolute w-8 h-6 top-2 left-[-23px]"
                alt="Component"
                src="/component-1-3.svg"
              />
            </div>

            <span className="absolute left-[54px] font-['Lexend',Helvetica] font-normal text-gohausdesignblack text-base tracking-[0] leading-[27.2px]">
              Book an intro with Marc
            </span>

            <div className="absolute w-full h-full top-0 left-0 rounded-[55px] border-2 border-solid border-[#ffefd4]" />
          </div>
        </Button>

        {/* Background gradient overlay */}
        <div className="absolute w-full h-[300px] top-0 left-0 z-0 overflow-hidden [background:linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)]">
          <div className="relative h-[665px] top-[-365px]">
            <div className="w-1/2 h-[665px] mx-auto bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-23.png)] absolute bg-cover bg-[50%_50%]" />
            <div className="absolute w-full h-[300px] top-[365px] left-0 border-t [border-top-style:solid] border-[#9e9e9e29]" />
          </div>
        </div>
      </div>

      {/* Radial gradient effect */}
      <div className="w-1/2 h-[429px] mx-auto z-[1] rounded-[694.64px] rotate-[-15deg] blur-[66px] opacity-30 absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />

      {/* Footer bottom section */}
      <div className="relative w-full h-[410px] z-0 bg-gohausdesignblack">
        <div className="relative w-full max-w-[1185px] h-[1185px] mx-auto">
          {/* Background texture */}
          <div className="absolute w-full h-full top-[-76px] opacity-[0.81] bg-[url(/dur2pqfvwxs5vh9xezmhuwtjidc-png.png)] bg-cover bg-[50%_50%]" />

          {/* Logo and copyright info */}
          <div className="absolute w-full flex flex-col items-center justify-center top-[82px]">
            <div className="w-[150px] h-9 bg-[url(/link---n81bfhf0emkhzjfarfldlkri6g-png.png)] bg-cover bg-[50%_50%] mb-6" />

            <p className="font-gohaus-design-lexend-light font-[number:var(--gohaus-design-lexend-light-font-weight)] text-white text-[length:var(--gohaus-design-lexend-light-font-size)] text-center tracking-[var(--gohaus-design-lexend-light-letter-spacing)] leading-[var(--gohaus-design-lexend-light-line-height)] whitespace-nowrap [font-style:var(--gohaus-design-lexend-light-font-style)] mb-2">
              The Design Partner for SaaS Founders
            </p>

            <p className="font-gohaus-design-lexend-extralight font-[number:var(--gohaus-design-lexend-extralight-font-weight)] text-gohausdesignpapaya-whip text-[length:var(--gohaus-design-lexend-extralight-font-size)] tracking-[var(--gohaus-design-lexend-extralight-letter-spacing)] leading-[var(--gohaus-design-lexend-extralight-line-height)] whitespace-nowrap [font-style:var(--gohaus-design-lexend-extralight-font-style)]">
              Copyright © 2025 HAUS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
