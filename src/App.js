import "./Styles/globalStyles.scss" 
import HomePage from "./Pages/HomePage"
import Menu from "./Componentes/Menu";
import Banner from "./Componentes/Banner";

export default function App() {
  return (
    <>
      <HomePage />
      <div className="menu-banner">
        <Menu />
        <Banner />
      </div>
    </>
  );
}
