import React, { useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";

export const BackgroundByAnima = (): JSX.Element => {
  const industries = [
    "Educational Institutions",
    "Corporate Training",
    "E-Learning Platforms",
    "Nonprofits & Government",
    "Content Creators",
    "Professional Development",
  ];
  
  // Clientside logo carousel animation
  const carouselRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    if (!carouselRef.current) return;
  
    const carousel = carouselRef.current;
    let animationFrameId: number;
    let position = 0;
    const speed = 0.5; // Smooth speed
  
    const animate = () => {
      position -= speed;
  
      // When scrolled past half (since doubledIndustries = 3x), reset to 0 for loop
      if (Math.abs(position) >= carousel.scrollWidth / 3) {
        position = 0;
      }
  
      carousel.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };
  
    animate();
  
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleScrollToProducts = () => {
    const element = document.getElementById("our-products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Double the items to ensure continuous scrolling
  const doubledIndustries = [...industries, ...industries, ...industries];

  return (
    <section className="w-full bg-gohausdesignblack overflow-hidden">
      {/* Subtitle with fixed gradient text */}
      <div className="flex justify-center mt-24 sm:mt-8 md:mt-24 mb-4 sm:mb-6">
        <div
          className="relative w-fit font-light italic text-base sm:text-[17px] leading-6 md:leading-[28.9px] whitespace-nowrap [font-family:'Merriweather',Helvetica] bg-clip-text text-transparent px-4 py-2 sm:px-0 sm:py-0"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(207,156,255,1) 0%, rgba(240,224,255,0.8) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10px rgba(207,156,255,0.3)",
          }}
        >
          Professionally designed layouts
        </div>
      </div>
      {/* Main Heading */}
      <h1 className="[font-family:'Urbanist',Helvetica] font-normal text-gohausdesignpapaya-whip text-4xl sm:text-5xl md:text-6xl lg:text-[92px] text-center tracking-[-1px] md:tracking-[-2.20px] leading-tight md:leading-[92px] mt-8 md:mt-16 lg:mt-32">
        Empower Learning & Networking 
        <br />
        with New-Age Products
      </h1>
      {/* Tagline */}
      <div className="w-full max-w-[90%] sm:max-w-[668px] mx-auto text-center [font-family:'Lexend',Helvetica] font-normal text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 mt-4 md:mt-6">
        <span className="font-light text-white tracking-[-0.06px]">
          Our Softwares{" "}
        </span>
        <span className="text-[#ffefd4] tracking-[-0.06px]">
          combines cutting-edge technology 
        </span>
        <span className="font-light text-white tracking-[-0.06px]">
          {" "}
          with{" "}
        </span>
        <span className="text-[#ffefd4] tracking-[-0.06px]">
          user-centric design
          <br />
        </span>
        <span className="font-light text-white tracking-[-0.06px]">
          to provide best service to{" "}
        </span>
        <span className="text-[#ffefd4] tracking-[-0.06px]">
          our users
        </span>
        <span className="font-light text-white tracking-[-0.06px]">.</span>
      </div>
      {/* CTA Button with Icon */}
      <Button 
        onClick={handleScrollToProducts}
        className="flex items-center h-10 md:h-[50px] px-4 md:px-6 mx-auto bg-gohausdesignpapaya-whip text-gohausdesignblack rounded-[55px] border-2 border-solid border-[#ffefd4] hover:bg-black hover:border-gohausdesignpapaya-whip hover:text-white mt-8 md:mt-16 lg:mt-24"
      >
        <span className="[font-family:'Lexend',Helvetica] font-normal text-sm md:text-base leading-5 md:leading-[27.2px]">
          View Our Products
        </span>
      </Button>
      
      {/* Background Layers */}
      <div className="relative w-full">
        <div className="w-full h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1244px] opacity-30 bg-[url(/uu4qzhgapxfiw7lwtd7edl6iskg-png.png)] bg-cover bg-center" />
        <div className="w-full h-[300px] sm:h-[400px] md:h-[527px] absolute bottom-0 opacity-80 bg-[url(/2ztm81mdcxemibswfvdh4x7jigg-png-1.png)] bg-cover bg-center" />
        <div className="w-[90%] max-w-[800px] md:max-w-[1344px] h-[300px] sm:h-[400px] md:h-[601px] absolute top-[100px] sm:top-[150px] md:top-[213px] left-1/2 -translate-x-1/2 rounded-[972.5px] rotate-[-15deg] blur-[66px] opacity-40 [background:radial-gradient(50%_50%_at_50%_50%,rgba(45,87,238,1)_0%,rgba(44,51,219,1)_66%,rgba(97,31,196,1)_66%,rgba(63,15,80,1)_100%)]" />
        <div className="w-[90%] max-w-[600px] md:max-w-[900px] h-[300px] sm:h-[600px] md:h-[900px] absolute top-[140px] sm:top-[200px] md:top-[280px] left-1/2 -translate-x-1/2 opacity-90 bg-[url(/hujtjjp0qnqsjrg8kvp6wcjrmc-png.png)] bg-cover bg-center" />
      </div>
      
      {/* Clients Carousel */}
      <div className="relative mb-8 md:mb-16">
        <div className="text-center mb-4 md:mb-8 italic text-gray-300 text-sm md:text-base">
          Our design expertise at work with:
        </div>
        <div
          className="relative flex justify-center overflow-hidden mx-auto max-w-[90%] sm:max-w-[700px] md:max-w-[900px]"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
          }}
        >
          <ul ref={carouselRef} className="flex items-center">
            {doubledIndustries.map((industry, index) => (
              <li key={index} className="flex-shrink-0 w-24 sm:w-28 mx-2 sm:mx-4">
                <div className="flex items-center justify-center h-12 sm:h-16 text-center italic text-white text-xs sm:text-sm md:text-base">
                  {industry}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};