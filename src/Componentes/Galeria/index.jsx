import React from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import open from "../../assets/icones/open.png"
import fav from "../../assets/icones/fav.png"  

export default function Galeria() {
  return (
    <section className={styles.galeria__edit}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.galeria__cards}>
        {fotos.map((key) => (
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
                <img src={fav}  alt="Ícone coração de curtida" />
                <img src={open} alt="Ícone de abrir modal" />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
