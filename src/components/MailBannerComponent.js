import Mail from "../assets/imgs/Store-2.jpg";

export default function MailBannerComponent() {
  return (
    <div className="container">
      <div className="mail-container">
        <img src={Mail} alt="mail" />
        <div className="mail-overlay"></div>
        <div className="mail-content text-center">
          <div>
            <h1 className="wl-title wl-title-small text-color-white">
              Get in Touch
            </h1>
            <h5 className="wl-pretitle text-color-white">
              Discover more about news, <br /> exclusive events and discount
            </h5>
            <div className="mail-form">
              <input
                className="wl-input wl-input--primary wl-input--primary--white"
                type="text"
                placeholder="type your email"
              />
              <button className="wl-btn wl-btn--primary wl-btn--primary--white wl-btn--small">
                ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
