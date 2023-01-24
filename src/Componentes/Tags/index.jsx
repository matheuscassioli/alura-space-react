import React from "react";
import styles from "./Tags.module.scss";
import fotos from "../Galeria/fotos.json"

export default function Tags({ tags, filtro, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags</p>
      <ul className={styles.tags__lista}>
        {tags.map((key) => (
          <li onClick={()=>filtro(key)} key={key}>{key}</li>
        ))}
        <li onClick={()=> setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
