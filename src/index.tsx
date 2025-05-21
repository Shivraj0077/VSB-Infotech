import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame";
import ContactUs from "./components/contactform";
import AboutUs from "./components/about";
import { Products } from "./screens/ElementLight/Products";
import Digi_card from "./screens/Digital-Visiting-Card/digi_card";
import Lms from "./screens/LMS/lms";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/lms" element={<Lms/>} />
        <Route path="/products/digital-visiting-card" element={<Digi_card />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);