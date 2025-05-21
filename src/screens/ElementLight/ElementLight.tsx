import React from "react";
import { BackgroundByAnima } from "./sections/BackgroundByAnima/BackgroundByAnima";
import { BackgroundWrapperByAnima } from "./sections/BackgroundWrapperByAnima";
import { CardGridSection } from "./sections/CardGridSection";
import { ContainerByAnima } from "./sections/ContainerByAnima";
import { ContainerWrapperByAnima } from "./sections/ContainerWrapperByAnima";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima/FooterByAnima";
import { HeaderByAnima } from "./sections/HeaderByAnima";
import { HeadingByAnima } from "./sections/HeadingByAnima/HeadingByAnima";
import { SectionByAnima } from "./sections/SectionByAnima";
import { SectionComponentNodeByAnima } from "./sections/SectionComponentNodeByAnima";
import { SectionWrapperByAnima } from "./sections/SectionWrapperByAnima";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="relative w-full bg-black">
      <BackgroundByAnima />
      <SectionByAnima />
      <CardGridSection />
      <DivWrapperByAnima />
      <BackgroundWrapperByAnima />
    </div>
  );
};