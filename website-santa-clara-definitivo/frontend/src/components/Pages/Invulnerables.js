import React from "react";
import "./Invulnerables.css";
import Invulnerable from "../Fcimages/Invulnerables.png";
import InvulnerablePic from "../Fcimages/Juny.jpg";
import InvulnerableColl from "../Fcimages/invul-img.jpg";
import InvulnerableColl2 from "../Fcimages/invul-img2.jpg";
import InvulnerableColl3 from "../Fcimages/Invul-img3.jpg";
import InvulnerableColl4 from "../Fcimages/invul-img4.jpg";

function Invulnerables() {
  return (
    <div>
      <div className="invulnerables section__padding">
        <div className="invulnerables-container">
          <div className="invulnerables__content text__center">
            <div className="invulnerables-header">
              <img src={Invulnerable} class="invulnerables-img" alt="..." />
            </div>
            <p className="invulnerables__text text__grey">
              "Entre los años 2014 y 2015, los indicadores de pobreza en
              Cataluña mostraban que el 19% de la población se encontraba en
              situación de pobreza o riesgo de exclusión social, una cifra que
              aumentaba hasta el 29,9% en los hogares con menores. Analizando
              este indicador, se observaba que los hogares con niños eran hasta
              cuatro veces más pobres que los hogares sin hijos y que el 45,6%
              de las familias monoparentales estaban en riesgo de exclusión
              social."
            </p>
          </div>
          <div className="invulnerables-card2-container">
            <div className="invul-card">
              <img src={InvulnerablePic} class="invulnerables-img" alt="..." />
              <h2>Programa Integral </h2>
              <p>
                <strong>#INVULNERABLES</strong> es un programa integral que se
                enfoca en niños y familias, proporcionando recursos y valores
                esenciales. El programa busca crear redes cooperativas y ofrece
                apoyo.
              </p>
            </div>
            <div className="invul-card">
              <h2>Igualdad de Oportunidades</h2>
              <p>
                A través de recursos y esfuerzos colaborativos, el programa
                tiene como meta asegurar que estos niños tengan acceso a una
                vida digna y exitosa en el futuro, proporcionándoles las
                herramientas necesarias para prosperar.
              </p>
              <img src={InvulnerablePic} class="invulnerables-img" alt="..." />
            </div>
            <div className="invul-card">
              <h2>Recursos</h2>
              <h5>QUE OFRECEMOS A LAS FAMÍLIAS DEL PROGRAMA?</h5>
              <p><strong>Refuerzo escolar, Estraescolares, Terapias, Talleres para padres, Odontologia, Apoyo familiar.</strong></p>
              <p>
                La meta es que estos niños crezcan en un entorno que les
                garantice no solo igualdad de oportunidades, sino también un
                futuro prometedor y exitoso.
              </p>
              <img src={InvulnerablePic} class="invulnerables-img" alt="..." />
            </div>
            <div className="invul-image-collage">
              <img
                src={InvulnerableColl}
                alt="Image 1"
                className="collage-image"
              />
              <img src={InvulnerableColl2} className="collage-image" />
              <img src={InvulnerableColl3} className="collage-image" />
              <img src={InvulnerableColl4} className="collage-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invulnerables;
