import "./Styles/globalStyles.scss"
import Header from "Componentes/Header"
import Menu from "Componentes/Menu";
import Banner from "Componentes/Banner";
import Rodape from "Componentes/Rodape";
import Galeria from "Componentes/Galeria";
import MenuMobile from "Componentes/MenuMobile";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="menu-banner">
          <Menu />
          <Banner />
        </div>
        <MenuMobile />
        <Galeria />
      </main>
      <Rodape />
    </>
  );
}
