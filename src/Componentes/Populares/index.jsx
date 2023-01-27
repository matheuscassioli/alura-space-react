import React from "react";
import populares from "./fotos-populares.json";
import "./populares.css";

export default function Populares() {
  return (
    <aside>
      <ul className="populares_lista">
        <p className="populares_title">Populares</p>
        <div className="populares_lista_hug">
        {populares.map((key) => (
          <li key={key.id} className="populares_item">
            <img src={key.path} alt={key.alt} />
          </li>
        ))}
        </div>
        <button className="populares_button">Ver mais</button>
      </ul>
    </aside>
  );
}
