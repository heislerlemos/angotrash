import "./assets/css/App.css";
import "bulma/css/bulma.css";
import Navbar from "./Navbar";
import View from "./trash/View";
import Create from "./trash/Create";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar />
      <br />
      <div class="title">Localizações</div>
      <div class="subtitle">
        Verifique as zonas que possuem mais lixeira no pais em Angola
      </div>
      <br />
      <Outlet />

      <BrowserRouter>
        <Routes>
           <Route path="/" element={<View />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
