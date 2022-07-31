import useWindowScrollPosition from "@rehooks/window-scroll-position";

export default function HeaderComponent() {
  let position = useWindowScrollPosition();

  return (
    <header
      className={position.y > 10 ? "header" : "header header--transparent"}
    >
      <div
        className={
          position.y > 10
            ? "header__logo"
            : "header__logo header__logo--transparent"
        }
      >
        <a href="/" className="header__logo-link">
          <h2>WATCH/LAB</h2>
        </a>
      </div>
      <nav
        className={
          position.y > 10
            ? "header__navigation"
            : "header__navigation header__navigation--transparent"
        }
      >
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
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="header-search-box">
        <input
          className={
            position.y > 10
              ? "wl-input-underline"
              : "wl-input-underline wl-input-underline--transparent"
          }
          type="text"
        />
        <button
          className={
            position.y > 10
              ? "wl-btn wl-btn-icon"
              : "wl-btn wl-btn-icon wl-btn-icon--transparent"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
