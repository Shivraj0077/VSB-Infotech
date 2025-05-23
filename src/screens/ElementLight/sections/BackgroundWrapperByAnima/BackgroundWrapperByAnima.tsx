import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const BackgroundWrapperByAnima = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is VSB Infotech and what do you offer?",
      answer: (
        <>
          VSB Infotech is a digital solutions provider specializing in Learning Management Systems (LMS) and tech tools designed for education, corporate training, and business growth.
          <br />
          We deliver scalable, user-friendly, and customizable software to empower smarter learning and digital transformation across industries.
        </>
      ),
      defaultOpen: true,
    },
    {
      question: "Who can benefit from your products?",
      answer: (
        <>
          Our solutions are perfect for educational institutions, corporate enterprises, startups, NGOs, healthcare providers, and freelancers.
          <br />
          Whether you're running training programs, managing online classrooms, or onboarding employees, we've got the right tools for you.
        </>
      ),
    },
    {
      question: "Do you offer customized solutions and branding?",
      answer: (
        <>
          Yes, all our software solutions can be tailored to your brand, workflow, and audience.
          <br />
          From layout design to custom domain names, we ensure your digital presence reflects your identity.
        </>
      ),
    },
    {
      question: "Is your software mobile-friendly and easy to use?",
      answer: (
        <>
          Absolutely. Our platforms are responsive, intuitive, and optimized for all screen sizes—desktop, tablet, or mobile.
          <br />
          Even users with no technical background can navigate and manage with ease.
        </>
      ),
    },
    {
      question: "Do you provide support after purchase?",
      answer: (
        <>
          Yes, we offer lifetime hosting and dedicated support packages.
          <br />
          Our team is always ready to assist you with updates, troubleshooting, or any queries.
        </>
      ),
    },
    {
      question: "How can I contact you or request a demo?",
      answer: (
        <>
          You can call us at <strong>+91 9004510103</strong> or email <strong>tgri.india@gmail.com</strong> for inquiries, demos, or support.
          <br />
          We'll help you understand how our products fit your specific needs.
        </>
      ),
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-14 py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gohausdesignblack relative">
      {/* Background gradient and image */}
      <div className="absolute w-full h-[200px] sm:h-[250px] lg:h-[300px] top-0 left-0 [background:linear-gradient(180deg,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)] border-t border-[#9e9e9e29]">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[665px] top-[-200px] sm:top-[-250px] lg:top-[-365px]">
          <div className="w-full max-w-[960px] h-full mx-auto bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-22.png)] bg-cover bg-center" />
        </div>
      </div>

      {/* Heading section */}
      <div className="flex flex-col max-w-[900px] items-center justify-center gap-4 relative z-[2]">
        <div className="flex flex-col items-center pb-[0.83px]">
          <h2 className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-3xl sm:text-5xl lg:text-[78px] text-center tracking-[-2.00px] leading-tight sm:leading-[81.9px]">
            Curious about something?
            <br className="hidden sm:block" />
            We've got answers
          </h2>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 z-[1]">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[930px] mx-auto"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-[#0000001a]"
            >
              <AccordionTrigger className="py-4 sm:py-5 font-gohaus-design-semantic-heading-4 text-base sm:text-lg lg:text-xl text-gohausdesignpapaya-whip">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 sm:pb-8">
                <div className="[font-family:'Lexend',Helvetica] font-light text-white text-sm sm:text-base lg:text-lg tracking-[-0.30px] leading-relaxed">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
