import React from "react";

// components
import HeroComponent from "../components/HeroComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import ImgSideComponent from "../components/ImgSideComponent";
import InstagramBannerComponent from "../components/InstagramBannerComponent";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <DescriptionComponent />
      <ImgSideComponent />
      <InstagramBannerComponent />
    </div>
  );
}
