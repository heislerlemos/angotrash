import "bulma/css/bulma.css";
import $ from "jquery";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        id="navMenu"
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            Menu
          </a>

          <a
            role="button"
            className="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/create" className="navbar-item">
              Criar nova Localização{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

export default Navbar;
