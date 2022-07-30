import React from "react";

// assets
import heroImage from "../assets/imgs/London-skyline.jpg";

export default function HeroComponent() {
  return (
    <div className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="hero-background" />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h3 className="pre-heading">LONDON COLLECTION SEASON</h3>
          <h1 className="heading">
            New Selection Of <br /> Henry London
          </h1>
          <p className="sub-heading">
            An estimable experience in the modern collection house
          </p>
          <button className="wl-btn wl-btn--primary"> Discover </button>
        </div>
        <a href="#">
          <div className="hero-blog-link">
            <h4 className="hero-blog-link--title">
              The Path to Success with Watchlab
            </h4>
            <div className="hero-blog-link-bg"></div>
            <p className="hero-blog-link--sub-title"></p>
            <button className="wl-btn wl-btn-navigation">next</button>
          </div>
        </a>
      </div>
    </div>
  );
}
