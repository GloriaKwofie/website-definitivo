import React from "react";
import "./Voluntarios.css";
import compromiso from "../Fcimages/compromiso.png";
import compasion from "../Fcimages/compasion.png";
import teamwork from "../Fcimages/teamwork.png";
import collage1 from "../Fcimages/teamwork.png";
import collage2 from "../Fcimages/teamwork.png";
import collage3 from "../Fcimages/teamwork.png";
import collage4 from "../Fcimages/teamwork.png";

function Voluntarios() {
  return (
    <>
      <div className="voluntario-container">
        <h1 className="voluntario-title">Los Voluntarios</h1>

        <div className="voluntario-para-section">
          <p>
            Los voluntarios son el gran capital humano de la Fundación. Son los
            responsables de la acogida y acompañamiento de las personas, y el
            lema que los anima y marca su actuación es siempre “acoger con el
            corazón”.
          </p>
          <p>
            Creemos que todos somos corresponsables con la vida de las personas
            y apostamos por el compromiso desinteresado y de calidad para servir
            y luchar por un mundo donde todos tengan oportunidades para
            evolucionar.
          </p>
        </div>

        <div className="voluntario-card-section">
          <div className="voluntario-card">
            <img
              src={compromiso}
              alt="Card 1"
              className="voluntario-card-image"
            />
            <h3 className="voluntario-card-title">
              <strong>El Compromiso</strong>
            </h3>
            <p className="voluntario-card-description">
              Están dispuestas a darlo todo sin nada a cambio.
            </p>
          </div>

          <div className="voluntario-card">
            <img
              src={compasion}
              alt="Card 2"
              className="voluntario-card-image"
            />
            <h3 className="voluntario-card-title">
              <strong>La Compasión</strong>
            </h3>
            <p className="voluntario-card-description">
              Son sensibles a la situación de la gente.
            </p>
          </div>

          <div className="voluntario-card">
            <img
              src={teamwork}
              alt="Card 3"
              className="voluntario-card-image"
            />
            <h3 className="voluntario-card-title">
              <strong>Trabajo en Equipo</strong>
            </h3>
            <p className="voluntario-card-description">
              Trabajando juntos para lograr los mismos objetivos.
            </p>
          </div>
        </div>
        <div class="voluntario-collage">
            <img src={collage1} alt="Image 1" />
            <img src={collage2} alt="Image 2" />
            <img src={collage3} alt="Image 3" />
            <img src={collage4} alt="Image 4" />
          </div>
      </div>
    </>
  );
}

export default Voluntarios;
