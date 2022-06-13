import './Simulacao.css';
import Menu from "../../components/menuLateral/Menu";
import SimulacaoForm from "../../components/formularios/simulacao/SimulacaoForm";
import CadastrarEncomenda from "../../components/formularios/encomenda/CadastrarEncomenda";

function Simulacao() {
    return (
        <>
            <Menu/>
            <div className={'title'}>
                <h1>Simulacao</h1>
            </div>
            {/* <div className={'content'}>
                <SimulacaoForm/>
            </div> */}
            <div className={'content'}>
                <CadastrarEncomenda/>
            </div>
        </>
    );
}

export default Simulacao;