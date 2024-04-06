import React from "react";
import "./Fundacion.css";
import aboutImage from "../Fcimages/woodbg.jpg";

function Fundacion() {
  return (
    <>
      <div className="fundacion-container">
        <div className="fundacion-content">
          <h1>La Fundación</h1>
          <p>
            La Fundación del Convento de Santa Clara nació gracias al impulso de
            la Plataforma Ciudadana de Solidaridad, creada en el Convento de
            Santa Clara de Manresa en abril del 2009.
          </p>
          <p>
            La Fundación del Convento de Santa Clara se ha convertido en el
            paraguas jurídico, organizativo y humano necesario para agilizar
            respuestas integrales a corto y largo plazo para personas que han
            sido expulsadas del sistema y que no pueden vivir con dignidad.
          </p>
        </div>
        <div className="fundacion-image-container">
          <img src={aboutImage} alt="About Us" className="fundacion-image" />
        </div>
        <div className="patronato">
          <h1>El Patronato</h1>
          <p className="para-intro">
            El Patronato es el órgano de gobierno y de administración de la
            Fundación, la representa y gestiona, y asume todas las facultades y
            funciones necesarias para la consecución de los fines fundacionales.
          </p>
          <p>Presidente: Gabriel Prat Ametlla. </p>
          <p> Vicepresidenta: Maria Rosa Giralt Mas.</p>
          <p>Directora: Sor Lucía Caram Padilla.</p>
          <p>Tesorero: Pere Pujadó Viusa.</p>
          <p>Vocal: Mar Alapont Sisquella.</p>
          <p>Vocal: Imma Augé Sanpera.</p>
          <p>Vocal: Montserrat Domenech Santasusana.</p>
          <p>Vocal: Pere Gassó Ollé.</p>
          <p>Vocal: Frank Margenat Trias</p>
          <p>Vocal: Jaume Masana Ribalta.</p>
          <p>Vocal: Vicenç Mauri Claret.</p>
          <p>Vocal: Xavier Perramon Ferran.</p>
          <p>Vocal: Manel Serra Armangué.</p>
          <p>Vocal: Xavier Sitges Roses.</p>
          <p>Vocal: Frederic Solé Montoya.</p>
          <p>Vocal: Gemma Torelló Sibill.</p>
          <p>Secretario no patrón: Josep Ribera Ferrer.</p>
          <div className="fundacion-image-container">
            <img src={aboutImage} alt="About Us" className="fundacion-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fundacion;
