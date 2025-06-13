import "bulma/css/bulma.css";
import $ from 'jquery';

const Navbar = () => {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation" id="navMenu">
        <div class="navbar-brand">
          <a href="/" class="navbar-item">
            Menu
          </a>

                <a
        role="button"
        class="navbar-burger"
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

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="/create" class="navbar-item">
              Criar nova Localização{" "}
            </a>
          </div>


        </div>
      </nav>
      
    </>
    
  );
  
};

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});



export default Navbar;
