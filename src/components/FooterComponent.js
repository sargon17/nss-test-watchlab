export default function FooterComponent() {
  return (
    <div className="container">
      <footer className="footer-container">
        <div className="footer-logo">
          <a href="#">WATCH/LAB</a>
        </div>
        <div className="footer-navigation">
          <ul>
            <li>Watch/Lab - Innovation brings success</li>
            <li>
              <address>Via Borgogna 5, Milan</address>
            </li>
            <li>Italy</li>
          </ul>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Brand</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Magazine</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
          </ul>
          <ul>
            <li>T. +39 392 9133937</li>
            <li>
              M.{" "}
              <a className="mail-link" href="mailto:info@watch-lab.it">
                info@watch-lab.it
              </a>
            </li>
            <li className="social-link">
              <a href="#"> facebook</a>
            </li>
            <li className="social-link">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="bottom-footer">
        <p>Copyright Watch/Lab all rights reserved</p>
        <p>
          website by <a href="#">nssfactory</a>
        </p>
      </div>
    </div>
  );
}
