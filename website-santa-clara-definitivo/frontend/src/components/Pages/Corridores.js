import React from "react";
import "./Corridores.css";
import Ambulancias from "../Fcimages/ambulancia.jpg";
import Ucrania from "../Fcimages/ucrania.png";
import Generadores from "../Fcimages/generadores.jpg";
import Bizzum from "../Fcimages/bizzum.jpg";

function Corridores() {
  return (
    <div>
      <div className="corridores section__padding">
        <div className="corridores-container">
          <div className="corridores__content text__center">
            <div className="corridores-header">
              <h1 className="corridores-section__title text__cap">
                CORRIDORES HUMANITARIOS
              </h1>
            </div>
            <p className="corridores__text text__grey">
              24 de febrero 2022 Inició la Guerra en Ucrania. Las Necesidades
              como acogida de personas, ayuda humanitaria y corredores
              humanitarios era muy importante.
            </p>
            <div>
              <div className="reto-container">
                <div class="reto-card">
                  <h2>RETO HOSPITAL DE CAMPAÑA </h2>
                  <img src={Bizzum} class="reto-img" alt="..." />
                  <div class="ucrania-part2-card-content"></div>
                </div>
              </div>
              <div className="ucrania-Part2-container">
                <div class="ucrania-part2-card">
                  <h2>Corredores humanitarios</h2>
                  <div class="ucrania-part2-card-content">
                    <p>
                      Para facilitar el traslado y rescate de los heridos,
                      enviamos:
                      <strong>
                        {" "}
                        90 Ambulancias, Cada Ambulancia salva más de 100 vidas.
                        61 Generadores, traslado y tratamiento de heridos y
                        dando acompañamiento.
                      </strong>
                    </p>
                  </div>
                </div>
                <div class="ucrania-part2-card">
                  <h2>Acogida de Personas</h2>
                  <div class="ucrania-part2-card-content">
                    <p>
                      Al comenzar la guerra, fuimos a Ucrania para acoger a las
                      personas que huían para salvar sus vidas.
                      <strong>
                        {" "}
                        Promovimos la insercion laboral, aprendizaje de la
                        lengua, acompañamiento personalizado,
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="corridores-img-part">
                <img src={Ambulancias} class="corridores-card-img1" alt="..." />
                <img src={Ucrania} class="corridores-card-img2" alt="..." />
                <img src={Generadores} class="corridores-card-img1" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corridores;
