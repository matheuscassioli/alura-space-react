import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import open from "../../assets/icones/open.png";
import fav from "../../assets/icones/fav.png";
import Populares from "../Populares";

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((tag) => tag.tag))];

  const filtro = (tag) =>{
    const newfotos = fotos.filter((key) => key.tag === tag) 
    setItens(newfotos)
  };

  return (
    <section className={styles.galeria__edit}>
      <h2 className={styles.galeria__h2}>Navegue pela galeria</h2>
      <Tags filtro={filtro} tags={tags}  setItens={setItens}/>
      <div className={styles.galeria__hug}>
        <ul className={styles.galeria__cards}>
          {itens.map((key) => (
            <li key={key.id} className={styles.galeria__card}>
              <img
                className={styles.galeria__imagem}
                src={key.imagem}
                alt={key.titulo}
              />
              <p className={styles.galeria__descricao}>{key.titulo}</p>
              <div className={styles.galeria__icones}>
                <p>{key.creditos}</p>
                <span>
                  <img src={fav} alt="Ícone coração de curtida" />
                  <img src={open} alt="Ícone de abrir modal" />
                </span>
              </div>
            </li>
          ))}
        </ul>
        <Populares />
      </div>
    </section>
  );
}
