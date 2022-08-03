import CoverImg from "../assets/imgs/watch_manufactort.jpg";
import Mail from "../assets/imgs/Store-2.jpg";
import Watch3 from "../assets/imgs/London-skyline.jpg";

import { useInView } from "react-cool-inview";

import { useState } from "react";

export default function PressComponent() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "-400px 0px",
  });

  // creating a slider for the press
  const [slider, setSlider] = useState(0);
  const sliderContent = [
    {
      title: "Most Important Days on Watchlab",
      data: "18 September 2020",
      img: CoverImg,
    },
    {
      title: "Watch Manufacturer",
      data: "18 September 2020",
      img: Mail,
    },
    {
      title: "Watch Manufacturer",
      data: "18 September 2020",
      img: Watch3,
    },
  ];

  const nextSlide = () => {
    setSlider((prevSlider) => {
      if (prevSlider < sliderContent.length - 1) {
        return prevSlider + 1;
      } else {
        return 0;
      }
    });
  };
  const prevSlide = () => {
    setSlider((prevSlider) => {
      if (prevSlider > 0) {
        return prevSlider - 1;
      } else {
        return sliderContent.length - 1;
      }
    });
  };

  return (
    <div className="container" ref={observe}>
      <div className="press grid flex-lg flex-column">
        <div
          className={
            inView
              ? "press__title mobile-container scroll-to-right"
              : "press__title invisible"
          }
        >
          <h2 className="wl-title ">
            Press from <br /> Watch Lab Studio
          </h2>
          <p className="wl-text">
            On the other hand, we denounce with righteous indigation and dislike
            men who are so beguiled and demoralized by the charms of pleasure of
            the moment, so blinded by desire{" "}
          </p>
        </div>
        <div
          className={
            inView ? "press__slider scroll-to-left" : "press__slider invisible"
          }
        >
          <div className="press__slider--container">
            <div className="press__slider-img">
              <img src={sliderContent[slider].img} width="400px" />
            </div>
            <div className="press__slider-content">
              <h5 className="wl-pretitle">press</h5>
              <h6 className="wl-pretitle text-color-gold">
                {sliderContent[slider].data}
              </h6>
              <h2 className="wl-title wl-title--small">
                {sliderContent[slider].title}
              </h2>
              <div className="press__slider-content-btns">
                <button
                  className="wl-btn wl-btn-icon wl-btn-icon--transparent"
                  onClick={prevSlide}
                >
                  {" "}
                  {"<"}{" "}
                </button>
                <button
                  className="wl-btn wl-btn-icon wl-btn-icon--transparent"
                  onClick={nextSlide}
                >
                  {" "}
                  {">"}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
