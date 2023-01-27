import React from "react";
import "./MenuMobile.css";
import home from "../../assets/icones/home-ativo.png"
import vistas from  "../../assets/icones/mais-vistas-inativo.png"
import curtidas from  "../../assets/icones/mais-curtidas-inativo.png"
import nova from  "../../assets/icones/novas-inativo.png"
import surpre from  "../../assets/icones/surpreenda-me-inativo.png"

export default function MenuMobile() {
  return (
    <>
      <nav className="menu-sidebar-mobile">
        <ul className="menu-sidebar__lista-mobile">
          <li>
            <img src={home} alt="" />
            <a href="#">Início</a>
          </li>
          <li>
            <img src={vistas} alt="" />
            <a href="#">Mais vistas</a>
          </li>
          <li>
            <img src={curtidas} alt="" />
            <a href="#">Mais curtidas</a>
          </li>
          <li>
            <img src={nova} alt="" />
            <a href="#">Nova</a>
          </li>
          <li>
            <img src={surpre} alt="" />
            <a href="#">Supreenda-me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
