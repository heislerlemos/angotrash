import $ from "jquery";
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;

function resize() {
    if ($(window).width() < 700) {
      $(".column").addClass("column is-auto");
    } else {
      $(".column").removeClass("column is-auto");
    }
  }

  $(document).ready(function () {
    resize();
  });

  $(window).on("resize", function () {
    resize();
  });

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
