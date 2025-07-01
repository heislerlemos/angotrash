import "bulma/css/bulma.css";
import "../assets/css/View.css";
import $ from "jquery";
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;
import React, { useState, useEffect } from "react";

const View = () => {

  
  const [localizacoes, setLocalizacoes] = useState([]);
  useEffect(() => {
  
    fetch("http://localhost:3000/localizacaos.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <>
      <div class="container">
        <div class="columns is-multiline is-mobile is-centered">
          <div className="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://www.verangola.net/va/images/cms-image-000030708.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">4 Yard Skip</p>
                    <p class="subtitle is-6">14 day hire period</p>
                  </div>
                </div>

                <div class="content">
                  <div id="money">£278</div>
                  <br />
                  <button class="button is-dark is-large">
                    Select This Skip{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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

export default View;
