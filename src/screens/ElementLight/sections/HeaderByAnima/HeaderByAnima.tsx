import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

export const HeaderByAnima = (): JSX.Element => {
  // Testimonial data for easier mapping
  const testimonials = [
    {
      id: 1,
      quote:
        "Marc was asked to completely redesign our Productivity App, and he amazed us with the results he showed us, leading to a 40% jump in sign-up conversions.",
      author: "Anton Nilsson",
      company: "Pallisto",
      featured: true,
      backgroundImage: "/2ztm81mdcxemibswfvdh4x7jigg-png-18.png",
      logoImage: "/bgnpbtbz4u2a4ghrndjy2uctunu-png.png",
    },
    {
      id: 2,
      quote:
        "Marc is a design genius. I worked with him on a couple of SaaS projects and he just makes great design look so easy. Oh and he kills it with his copy too.",
      author: "Jonathan Wilke",
      company: "Superstarter",
      featured: false,
    },
    {
      id: 3,
      quote:
        "Marc is an exceptional designer. I was first introduced to his work many years ago, and was blown away by his rigorous and meticulous attention to detail.",
      author: "Jon Moore",
      company: "SalesForce",
      featured: false,
    },
    {
      id: 4,
      quote:
        "Marc is one of the most precious in our industry, the way he approaches projects is an inspiration, and I'm proud that we got to work together.",
      author: "Jan Six",
      company: "GitHub",
      featured: false,
    },
    {
      id: 5,
      quote:
        "Marc is just awesome! The man is a great problem solver, and always goes that extra mile to make your product stand out.",
      author: "Lazar Nikolov",
      company: "Sentry",
      featured: false,
    },
    {
      id: 6,
      quote:
        "I had an amazing time working with Jacob to brainstorm designs for a new product at Cisco. He always focused on what users need, and added huge value to our product team.",
      author: "Ross Anderson",
      company: "Cisco",
      featured: true,
      backgroundImage: "/2ztm81mdcxemibswfvdh4x7jigg-png-19.png",
      logoImage: "/ubsltw6qd16bj39lnikmpgrixk-png.png",
    },
  ];

  // Separate testimonials into featured and regular
  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <header className="flex flex-col w-full items-center justify-center gap-14 py-10 px-[30px] bg-transparent">
      <div className="flex flex-col max-w-[900px] items-center justify-center gap-4 relative z-[1]">
        <div className="flex flex-col items-center pt-0 pb-[0.83px] px-0 relative self-stretch w-full">
          <h1 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-[78px] text-center tracking-[-2.00px] leading-[81.9px]">
            Great people,
            <br />
            saying great things
          </h1>
        </div>

        <p className="relative w-fit [background:linear-gradient(90deg,rgba(207,156,255,1)_0%,rgba(240,224,255,0.8)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-70 font-['Merriweather',Helvetica] font-light italic text-transparent text-xl text-center tracking-[-0.30px] leading-[34px] whitespace-nowrap">
          Direct feedback from SaaS founders and Fortune 500 clients
        </p>
      </div>

      <div className="relative w-full max-w-[1297px] z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First row with featured testimonial and two regular testimonials */}
          <div className="grid grid-cols-1 gap-6">
            {/* Featured testimonial 1 */}
            <Card className="flex flex-col h-[400px] items-start justify-end gap-[22.9px] p-10 bg-neutral-900 rounded-3xl overflow-hidden border border-solid border-[#ffefd41a] relative">
              <div
                className="w-full h-[831px] top-[-543px] left-[122px] bg-cover bg-[50%_50%] absolute"
                style={{
                  backgroundImage: `url(${featuredTestimonials[0].backgroundImage})`,
                }}
              />

              <div className="flex items-start relative self-stretch w-full opacity-50">
                <div
                  className="relative self-stretch w-[100px] bg-cover bg-[50%_50%]"
                  style={{
                    backgroundImage: `url(${featuredTestimonials[0].logoImage})`,
                  }}
                />
              </div>

              <CardContent className="p-0">
                <blockquote className="relative w-fit mr-[-24.64px] font-['Merriweather',Helvetica] font-light italic text-gohausdesignpapaya-whip text-2xl tracking-[-0.72px] leading-[38.4px]">
                  "{featuredTestimonials[0].quote}"
                </blockquote>
              </CardContent>

              <CardFooter className="p-0">
                <p className="relative w-fit font-['Lexend',Helvetica] font-normal text-gohausdesignwhite-50 text-lg tracking-[-0.54px] leading-[25.2px] whitespace-nowrap">
                  — {featuredTestimonials[0].author},{" "}
                  {featuredTestimonials[0].company}
                </p>
              </CardFooter>

              <div className="w-[578px] h-[258px] top-[200px] left-[254px] rounded-[418.23px] rotate-[-15deg] blur-[66px] opacity-30 absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Regular testimonials 1 & 2 */}
            {regularTestimonials.slice(0, 2).map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="h-48 bg-gohausdesignwhite-5 rounded-3xl border border-solid border-[#ffefd41a]"
              >
                <CardContent className="flex flex-col gap-[16.68px] p-10 pr-[74.48px]">
                  <blockquote className="relative w-fit mt-[-1.00px] font-gohaus-design-merriweather-light font-[number:var(--gohaus-design-merriweather-light-font-weight)] text-gohausdesignwhite-90 text-[length:var(--gohaus-design-merriweather-light-font-size)] tracking-[var(--gohaus-design-merriweather-light-letter-spacing)] leading-[var(--gohaus-design-merriweather-light-line-height)] [font-style:var(--gohaus-design-merriweather-light-font-style)]">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="relative w-fit font-gohaus-design-lexend-regular font-[number:var(--gohaus-design-lexend-regular-font-weight)] text-gohausdesignwhite-50 text-[length:var(--gohaus-design-lexend-regular-font-size)] tracking-[var(--gohaus-design-lexend-regular-letter-spacing)] leading-[var(--gohaus-design-lexend-regular-line-height)] whitespace-nowrap [font-style:var(--gohaus-design-lexend-regular-font-style)]">
                    — {testimonial.author}, {testimonial.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row with regular testimonials and featured testimonial */}
          <div className="grid grid-cols-1 gap-6">
            {/* Regular testimonials 3 & 4 */}
            {regularTestimonials.slice(2, 4).map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="h-48 bg-gohausdesignwhite-5 rounded-3xl border border-solid border-[#ffefd41a]"
              >
                <CardContent className="flex flex-col gap-[16.68px] p-10 pr-[54.45px]">
                  <blockquote className="relative w-fit mt-[-1.00px] font-gohaus-design-merriweather-light font-[number:var(--gohaus-design-merriweather-light-font-weight)] text-gohausdesignwhite-90 text-[length:var(--gohaus-design-merriweather-light-font-size)] tracking-[var(--gohaus-design-merriweather-light-letter-spacing)] leading-[var(--gohaus-design-merriweather-light-line-height)] [font-style:var(--gohaus-design-merriweather-light-font-style)]">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="relative w-fit font-gohaus-design-lexend-regular font-[number:var(--gohaus-design-lexend-regular-font-weight)] text-gohausdesignwhite-50 text-[length:var(--gohaus-design-lexend-regular-font-size)] tracking-[var(--gohaus-design-lexend-regular-letter-spacing)] leading-[var(--gohaus-design-lexend-regular-line-height)] whitespace-nowrap [font-style:var(--gohaus-design-lexend-regular-font-style)]">
                    — {testimonial.author}, {testimonial.company}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Featured testimonial 2 */}
            <Card className="flex flex-col h-[400px] items-start justify-end gap-[22.9px] p-10 bg-neutral-900 rounded-3xl overflow-hidden border border-solid border-[#ffefd41a] relative">
              <div
                className="w-full h-[831px] top-[-543px] left-[122px] bg-cover bg-[50%_50%] absolute"
                style={{
                  backgroundImage: `url(${featuredTestimonials[1].backgroundImage})`,
                }}
              />

              <div className="flex items-start relative self-stretch w-full opacity-50">
                <div
                  className="relative self-stretch w-[100px] bg-cover bg-[50%_50%]"
                  style={{
                    backgroundImage: `url(${featuredTestimonials[1].logoImage})`,
                  }}
                />
              </div>

              <CardContent className="p-0">
                <blockquote className="relative w-fit mr-[-16.64px] font-['Merriweather',Helvetica] font-light italic text-gohausdesignpapaya-whip text-2xl tracking-[-0.72px] leading-[38.4px]">
                  "{featuredTestimonials[1].quote}"
                </blockquote>
              </CardContent>

              <CardFooter className="p-0">
                <p className="relative w-fit font-['Lexend',Helvetica] font-normal text-gohausdesignwhite-50 text-lg tracking-[-0.54px] leading-[25.2px] whitespace-nowrap">
                  — {featuredTestimonials[1].author},{" "}
                  {featuredTestimonials[1].company}
                </p>
              </CardFooter>

              <div className="w-[578px] h-[258px] top-[200px] left-[254px] rounded-[418.23px] rotate-[-15deg] blur-[66px] opacity-30 absolute [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />
            </Card>
          </div>
        </div>
      </div>
    </header>
  );
};
