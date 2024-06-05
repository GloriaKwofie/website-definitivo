import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Carrousel from "./Carrousel";

const NewsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const noticias = t("news", { returnObjects: true });
  const noticia = noticias.find((n) => n.id === parseInt(id));

  return (
    <>
      {noticia ? (
        <>
          <Carrousel
            images={[
              noticia.carrousel1,
              noticia.carrousel2,
              noticia.carrousel3,
              noticia.carrousel4,
            ]}
          />
          <h1>{noticia.title}</h1>
          <h2>{noticia.subtitle}</h2>
          <p>{noticia.body}</p>
        </>
      ) : (
        <p>{t("loading_news")}</p>
      )}
    </>
  );
};

export default NewsPage;
