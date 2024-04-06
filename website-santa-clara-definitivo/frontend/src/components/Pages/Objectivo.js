import React from "react";
import "./Objectivo.css";
import Mission from "../Pages/Mission";
import Valores from "../Fcimages/value1.jpg";
import SDG from "../Fcimages/sdg.jpg";
import Objectio from "../Fcimages/objectivos.jpg";

function Objectivo() {
  return (
    <>
      <Mission />
      <div className="valores-container">
        <div className="valores-card">
          <img src={Valores} alt="" className="valores-card-image" />
          <div className="valores-card-content">
            <h2 className="valores-card-title">Valores</h2>
            <p>
              <strong>Sentido de justicia:</strong> Defensa de los derechos
              humanos.
            </p>
            <p>
              <strong>Corresponsabilidad:</strong> Compromiso, implicación,
              solidaridad.
            </p>
            <p>
              <strong>Transparencia:</strong> Veracidad, honradez, integridad y
              confianza.
            </p>
          </div>
        </div>
      </div>
      <h1 className="objectivo-title">Objectivo</h1>
      <div className="objectivo-card-container">
        <div className="objectivo-card">
          <img src={Objectio} alt="" className="objectivo-card-image" />
          <div className="objectivo-card-content">
            <h2 className="objectivo-card-title">Primario</h2>
            <p>
              -Prevenir, detectar y atender a personas en riesgo de exclusión
              social.
            </p>
            <p>
              -La sensibilización de los problemas de la población y promoción
              de la corresponsabilidad desde la integración a la red de
              entidade.
            </p>

            <p>
              -La promoción de proyectos de solidaridad y desarrollo en el
              tercer y cuarto mundo.
            </p>
          </div>
        </div>
        <div className="objectivo-card">
          <img src={SDG} alt="" className="objectivo-card-image" />
          <div className="objectivo-card-content">
            <h2 className="objectivo-card-title">SDG´s</h2>
            <p>
              La fundación del Convento de Santa Clara trabaja constanmente por
              contribuir a alcanzar los objectivos de sostenibilidad.
            </p>
            <p>
              Para nosotros es muy importante que nadie se quede sin comida.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objectivo;
