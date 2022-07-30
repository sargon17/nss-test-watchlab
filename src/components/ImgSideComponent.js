import temporaryStore from "../assets/imgs/Temporary Store.jpg";
import newCollection from "../assets/imgs/watch_man_2.jpg";

export default function ImgSideComponent() {
  return (
    <div className="container">
      <div className="img-side-container grid">
        <div className="img-side-content-wrapper">
          <div className="img-side-content text-center">
            <h5 className="wl-pretitle">london collection season</h5>
            <h2 className="wl-title wl-title--small text-center">
              Temporary Store
            </h2>
            <p className="wl-text text-center">
              On the other hand, we denounce with righteous indigation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire
            </p>
            <a className="wl-btn wl-btn--primary">View</a>
          </div>
        </div>
        <div className="img-side-photo">
          <img src={temporaryStore} alt="hero-background" />
        </div>
      </div>
      <div className="img-side-container grid">
        <div className="img-side-photo">
          <img src={newCollection} alt="hero-background" />
        </div>
        <div className="img-side-content-wrapper">
          <div className="img-side-content text-center">
            <h5 className="wl-pretitle">london collection season</h5>
            <h2 className="wl-title wl-title--small text-center">
              New Collection Henry London
            </h2>
            <p className="wl-text text-center">
              On the other hand, we denounce with righteous indigation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire
            </p>
            <a href="#" className="wl-btn wl-btn--primary">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}