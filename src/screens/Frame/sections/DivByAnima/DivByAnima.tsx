import React from "react";
import { Button } from "../../../../components/ui/button";

export const DivByAnima = (): JSX.Element => {
  return (
    <section className="flex items-start justify-center py-12 sm:py-16 md:py-20 px-4 relative w-full bg-white">
      <div className="w-full max-w-[1440px]">
        <div className="flex flex-col items-center">
          <h2 className="font-['Figtree',Helvetica] font-normal text-[#232323] text-3xl sm:text-4xl md:text-5xl text-center leading-tight sm:leading-[58px] mb-4 sm:mb-5">
            Ready to start your project?
          </h2>
          <p className="font-['Inter',Helvetica] font-normal text-[#6d6d6d] text-base sm:text-lg md:text-xl text-center leading-6 sm:leading-7 max-w-[644px] mb-8 sm:mb-12">
            Let's discuss how we can help you achieve your goals.
            <br className="hidden sm:block" />
            Our team is ready to turn your vision into reality.
          </p>
          <Button className="bg-[#232323] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-none hover:bg-[#232323]/90">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};
