import CoverImg from "../assets/imgs/watch_manufactort.jpg";
import { useInView } from "react-cool-inview";

export default function PressComponent() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "-400px 0px",
  });

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
            <img src={CoverImg} width="400px" />
            <div className="press__slider--content">
              <h5 className="wl-pretitle">press</h5>
              <h6 className="wl-pretitle text-color-gold">18 settembre 2015</h6>
              <h2 className="wl-title wl-title--small">
                Most Important Days on Watchlab
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
