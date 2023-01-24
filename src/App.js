import "./Styles/globalStyles.scss"
import Header from "./Componentes/Header"
import Menu from "./Componentes/Menu";
import Banner from "./Componentes/Banner";
import Rodape from "./Componentes/Rodape";
import Galeria from "./Componentes/Galeria";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="menu-banner">
          <Menu />
          <Banner />
        </div>

        <Galeria />
      </main>
      <Rodape />
    </>
  );
}
