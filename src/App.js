import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Menu from './componentes/menuLateral/Menu';
import Inicial from './pages/inicial/Inicial';
import DashBoard from './pages/dashboard/DashBoard';
import ManterEmpresa from './pages/manterEmpresa/ManterEmpresa';
import MinhaConta from './pages/minhaConta/MinhaConta';
import MinhasEncomendas from './pages/minhasEncomendas/MinhasEncomendas';
import Veiculos from './pages/veiculos/Veiculos';
import Rastreio from './pages/rastreio/Rastreio';
import Simulacao from './pages/simulacao/Simulacao';

function App() {
    return (
       <Router>
            {/* <Inicial/> */}
            <Menu />
            <Routes>
                <Route path="/" element={<Inicial />} />
                <Route path="/DashBoard" element={<DashBoard />} />
                <Route path="/ManterEmpresa" element={<ManterEmpresa />} />
                <Route path="/MinhaConta" element={<MinhaConta />} />
                <Route path="/MinhasEncomendas" element={<MinhasEncomendas />} />
                <Route path="/Veiculos" element={<Veiculos />} />
                <Route path="/Rastreio" element={<Rastreio />} />
                <Route path="/Simulacao" element={<Simulacao />} />
            </Routes>
        </Router>
    );
}

export default App;
