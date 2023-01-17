import React from "react";
import "./Rodape.css";
import facebook from "../../assets/facebook.svg"

export default function Rodape() {
  return (
    <div className="rodape">
      <div className="rodape_redes">
        <div className="rodape_hug-img" style={{ backgroundImage: `url(${facebook})`}}></div>
        <div className="rodape_hug-img" style={{ backgroundImage: `url(${facebook})`}}></div>
        <div className="rodape_hug-img" style={{ backgroundImage: `url(${facebook})`}}></div>
      </div>
      <div className="rodape_desenvolvido">
        <p>Desenvolvido por Alura</p>
        <p>Feito por Matheus Cassioli</p>
      </div>
    </div>
  );
}
