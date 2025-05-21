import React from "react";

export const HeadingByAnima = (): JSX.Element => {
  // Define the heading text as arrays to make it easier to map through
  const firstLineText = "We're Marcand Jacob from Haus—a design";
  const secondLineText = "partnership combining 35+ years of experience";
  const thirdLineText = "building successful products and elevating";
  const fourthLineText =
    "brands for Fortune-500 companies. While Haus is new, our expertise isn't. And now";

  // Create a function to render each character with consistent styling
  const renderCharacters = (text: string, startY: number) => {
    return text.split("").map((char, index) => (
      <div
        key={`${startY}-${index}`}
        className="inline-flex items-start justify-center"
        style={{ position: "relative" }}
      >
        <div className="relative w-fit mt-[-1.00px] font-gohaus-design-semantic-heading-2 font-[number:var(--gohaus-design-semantic-heading-2-font-weight)] text-gohausdesignpapaya-whip text-[length:var(--gohaus-design-semantic-heading-2-font-size)] text-center tracking-[var(--gohaus-design-semantic-heading-2-letter-spacing)] leading-[var(--gohaus-design-semantic-heading-2-line-height)] whitespace-nowrap [font-style:var(--gohaus-design-semantic-heading-2-font-style)]">
          {char}
        </div>
      </div>
    ));
  };

  return (
    <section className="relative w-full max-w-[992px] mx-auto py-16">
      <div className="relative w-full">
        <h1 className="sr-only">
          We're Marcand Jacob from Haus—a design partnership combining 35+ years
          of experience building successful products and elevating brands for
          Fortune-500 companies.
        </h1>

        <div className="flex flex-wrap justify-center mb-8">
          {renderCharacters(firstLineText, 0)}
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {renderCharacters(secondLineText, 62)}
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {renderCharacters(thirdLineText, 125)}
        </div>

        <div className="flex flex-wrap justify-center">
          {renderCharacters(fourthLineText, 187)}
        </div>
      </div>
    </section>
  );
};
