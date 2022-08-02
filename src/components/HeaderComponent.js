import useWindowScrollPosition from "@rehooks/window-scroll-position";

import { useState } from "react";

export default function HeaderComponent() {
  let position = useWindowScrollPosition();
  let [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuShown(!isMobileMenuShown);
  }

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
          WATCH/LAB
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
      <div className="header-mobile-menu">
        <button
          className={
            position.y > 10
              ? "wl-btn wl-btn-icon"
              : "wl-btn wl-btn-icon wl-btn-icon--transparent"
          }
          onClick={() => toggleMobileMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div
          className={
            isMobileMenuShown
              ? "mobile-menu-overflow"
              : "mobile-menu-overflow d-none"
          }
        >
          <div className="close-btn-wrapper">
            <button
              className="wl-btn wl-btn-icon"
              onClick={() => toggleMobileMenu()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
          <nav className="mobile-menu">
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
        </div>
      </div>
    </header>
  );
}
