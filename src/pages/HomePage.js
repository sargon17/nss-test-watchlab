import React from "react";

// components
import HeroComponent from "../components/HeroComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import ImgSideComponent from "../components/ImgSideComponent";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <DescriptionComponent />
      <ImgSideComponent />
    </div>
  );
}
