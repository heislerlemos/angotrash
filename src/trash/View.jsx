import "bulma/css/bulma.css";
import "../assets/css/View.css";
import $ from "jquery";
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

const View = () => {
  const [localizacoes, setLocalizacoes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/localizacaos.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocalizacoes(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {localizacoes.map((localizacao) => {
        return (
          <div class="container">
            <div class="columns is-multiline is-mobile is-centered">
              <div className="column is-one-third">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">Id : {localizacao.id}</p>
                    <button class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <FaAngleDown />
                      </span>
                    </button>
                  </header>
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src={localizacao.imagem} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">Zona : {localizacao.zona}</p>
                        <br />
                        <p class="subtitle is-6">
                          Posto_de_Lixo : {localizacao.postodelixo}
                        </p>
                        <p class="subtitle is-6">
                          Numero_de_Recolhas : {localizacao.recolha}
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <div class="dropdown">
                        <button onclick="myFunction()" class="dropbtn">
                          Agentes
                        </button>
                        <div id="myDropdown" class="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
    </>
    
  );
};

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
