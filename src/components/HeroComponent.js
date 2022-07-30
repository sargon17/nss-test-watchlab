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
            <div className="wl-btn wl-btn--navigation wl-btn--navigation--text">
              <span>next</span>
              <svg
                className=".wl-btn--navigation__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 10 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
