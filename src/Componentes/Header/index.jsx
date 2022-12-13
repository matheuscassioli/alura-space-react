import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png"
import styles from "./Headers.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Alura-Space"/>
     
      <div className={styles.header__container}>
          <input className={styles.header__input} placeholder="O que você procura?" />
          <img src={search} alt="Lupa de pesquisa"/>
      </div>
    
    </header>
  );
}
