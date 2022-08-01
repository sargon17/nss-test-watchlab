import React from "react";

// components
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import DescriptionComponent from "../components/DescriptionComponent";
import ImgSideComponent from "../components/ImgSideComponent";
import PressComponent from "../components/PressComponent";
import InstagramBannerComponent from "../components/InstagramBannerComponent";
import MailBannerComponent from "../components/MailBannerComponent";
import FooterComponent from "../components/FooterComponent";

export default function HomePage() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <DescriptionComponent />
      <ImgSideComponent />
      <PressComponent />
      <InstagramBannerComponent />
      <MailBannerComponent />
      <FooterComponent />
    </div>
  );
}
