import { useContext } from 'react';
import DataContext from '../../data/DataContext';
import Usuario from "../../components/formularios/Usuario/Usuario";

function MinhaConta() {

    const { state, setState } = useContext(DataContext)

    function setMiranda() {
        setState({
            ...state,
            nome: 'Miranda',
        })
    }

    function setSenna() {
        setState({
            ...state,
            nome: 'Senna',
        })
    }

    return (
        <div className='Teste'>
            <h1>Minha Conta - { state.nome }</h1>
            <div>
                <button onClick={() => setMiranda()}>Miranda</button>
                <button onClick={() => setSenna()}>Senna</button>
            </div>
            <Usuario/>
        </div>
    );
}

export default MinhaConta;