import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>} >
          <Route path="/" element={<Inicio/>} />
          <Route path="aboutMe" element={<SobreMim/>} />
          
        </Route>
        
        <Route path="posts/:id" element={<Post/>} />
        {/* Na rota "/", a estrutura a ser renderizada é:

          <PaginaPadrao>
            <Inicio/>
          <PaginaPadrao/>

          Na rota "/aboutMe", a estrutura a ser renderizada é:

          <PaginaPadrao>
            <SobreMim/>
          <PaginaPadrao/>
          
        */}

        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
