import './App.css';
import Inicial from "./pages/inicial/Inicial";
import Login from '../src//pages/login/Login'
import Header from './componentes/header/Header';
import Rastreio from './pages/rastreio/Rastreio';
import Simulacao from './pages/simulacao/Simulacao';
import MinhaConta from './pages/minhaConta/MinhaConta';



function App() {
    return (
        <div>
        <Header/>
        <MinhaConta/>

        </div>
    );
}

export default App;
