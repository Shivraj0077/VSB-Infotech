import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "Custom Web Applications",
      description:
        "Tailored solutions built with modern technologies to meet your specific business needs.",
      icon: "💻",
    },
    {
      id: 2,
      title: "E-commerce Platforms",
      description:
        "Scalable and secure online stores with advanced features and seamless user experience.",
      icon: "🛍️",
    },
    {
      id: 3,
      title: "Enterprise Solutions",
      description:
        "Robust applications designed for large organizations with complex requirements.",
      icon: "🏢",
    },
    {
      id: 4,
      title: "Progressive Web Apps",
      description:
        "Fast, reliable, and engaging web applications that work across all devices.",
      icon: "📱",
    },
  ];

  return (
    <section className="flex items-start justify-center py-12 sm:py-16 md:py-20 px-4 relative w-full bg-[#f4f4f4]">
      <div className="w-full max-w-[1440px]">
        <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-['Figtree',Helvetica] font-normal text-[#232323] text-3xl sm:text-4xl md:text-5xl text-center leading-tight sm:leading-[58px] mb-4 sm:mb-5">
            Our Services
          </h2>
          <p className="font-['Inter',Helvetica] font-normal text-[#6d6d6d] text-base sm:text-lg md:text-xl text-center leading-6 sm:leading-7 max-w-[644px]">
            We offer a wide range of web development services to help your business grow.
            <br className="hidden sm:block" />
            From custom applications to enterprise solutions, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="border-none shadow-none bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{feature.icon}</div>
                <h3 className="font-['Inter',Helvetica] font-medium text-[#232323] text-lg sm:text-xl leading-6 sm:leading-7 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="font-['Inter',Helvetica] font-normal text-[#6d6d6d] text-sm sm:text-base leading-5 sm:leading-[22px]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
