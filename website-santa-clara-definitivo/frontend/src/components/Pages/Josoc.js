import React from "react";
import "./Josoc.css";
import Josocpic from "../Fcimages/josocb.JPG";
import Josocpic2 from "../Fcimages/josoca.JPG";



function Josoc() {
  return (
    <>
      <div className="josoc section__padding">
        <div className="josoc-container">
          <div className="josoc__content text__center"></div>
          <div className="josoc-header">
            <h1 className="josoc-section__title text__cap">JO SOC</h1>
          </div>

          <div className="josoc-project-info">
            <p className="josoc-project-text">
              El proyecto Jo Soc comenzó en Manresa en el verano de 2023 para
              dar continuidad al programa iniciado en el verano de 2022 llamado
              'Método Manresa'. El éxito del proyecto es gracias a las distintas entidades como: <strong>Meseoestetic, Joviat y Mossos d’Esquadra</strong>. 
            </p>
            <h2 className="obj-title">OBJECTIVO</h2>
            <div className="josoc-card-container">
              <div className="josoc-card">
                <h3>Para Que?</h3>
                <p>
                  {" "}
                  Para prevenir, detectar y atender a los jóvenes que se
                  encuentran en situación de exclusión social y/o adicciones y/o
                  antecedentes policiales y penales.
                </p>
              </div>
              <div className="josoc-card">
                <h3>Porque?</h3>
                <p>
                  {" "}
                  Para dar les la oportunidad de formarse en valores, hábitos
                  saludables, idiomas y deporte, para que puedan disfrutar de
                  una mayor autoestima y salud mental.
                </p>
              </div>
            </div>
            <p></p>
          </div>
          <div className="josoc-pic">
          <img src={Josocpic} class="josoc-card-img" alt="..." />
          <img src={Josocpic2} class="josoc-card-img" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Josoc;
