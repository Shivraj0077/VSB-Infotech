import React from "react";
import { ElementLight } from "./ElementLight";
import Navbar from "../../nav/nav";

export const Products = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <ElementLight />
      </div>
    </div>
  );
}; 