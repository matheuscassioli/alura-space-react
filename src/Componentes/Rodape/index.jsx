import React from "react";
import "./Rodape.css";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape_redes">
        <div
          className="rodape_hug-img"
          style={{ backgroundImage: `url(${facebook})` }}
        ></div>
        <div
          className="rodape_hug-img"
          style={{ backgroundImage: `url(${twitter})` }}
        ></div>
        <div
          className="rodape_hug-img"
          style={{ backgroundImage: `url(${instagram})` }}
        ></div>
      </div>
      <div className="rodape_desenvolvido">
        <p>Desenvolvido por Alura</p>
        <p>Feito por Matheus Cassioli</p>
      </div>
    </footer>
  );
}
