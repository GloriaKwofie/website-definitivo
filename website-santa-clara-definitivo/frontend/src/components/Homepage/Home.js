import "../../App.css";
import React from "react";
import Cards from "../Cards/Cards";
import Noticias from "../Noticias/Noticias";
import EventosData from "../Pages/EventosData";
import Mission from "../Pages/Mission";

function Home() {
  return (
    <>
      <Mission />
      <Noticias />
      <Cards />
      <EventosData />
    </>
  );
}

export default Home;
