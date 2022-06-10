import './Simulacao.css';
import Menu from "../../components/menuLateral/Menu";
import SimulacaoForm from "../../components/formularios/simulacao/SimulacaoForm";

function Simulacao() {
    return (
        <>
            <Menu/>
            <div className={'title'}>
                <h1>Simulacao</h1>
            </div>
            <div className={'content'}>
                <SimulacaoForm/>
            </div>
        </>
    );
}

export default Simulacao;