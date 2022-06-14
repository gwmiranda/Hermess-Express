import './MinhasEncomendas.css';
import Menu from "../../components/menuLateral/Menu";
import {useContext, useEffect, useState} from "react";
import DataContext from "../../data/DataContext";
import axios from "../../axios";
import CardEncomendas from '../../components/cards/encomendas/CardEncomendas';

function MinhasEncomendasAdm() {

    const {state, setState} = useContext(DataContext)
    const [encomendas, setEncomendas] = useState([])

    useEffect(() => {
        responseListaEncomendas();
    }, [])

    const responseListaEncomendas = async () => {
        return axios.get(`/package/getAll`)
            .then((res) => {
                console.log(res.data.data.encomenda)
                setEncomendas(res.data.data.encomenda)
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
            })
    }

    return (
        <>
            <Menu/>
            <div className='Teste'>
                <h1>Todas Encomendas</h1>
            </div>

            {encomendas.map((enc) => (
                <CardEncomendas
                    id={enc.id}
                    token={enc.token}
                    status={enc.status}
                    veiculo={enc.id_tipo_veiculo}
                    coleta={`${enc.logradouro_coleta}, ${enc.numero_coleta}, ${enc.bairro_coleta}, ${enc.cidade_coleta}, ${enc.estado_coleta}, ${enc.cep_coleta}`}
                    entrega={`${enc.logradouro_entrega}, ${enc.numero_entrega}, ${enc.bairro_entrega}, ${enc.cidade_entrega}, ${enc.estado_entrega}, ${enc.cep_entrega}`}
                    valor={enc.valor_entrega}
                />
            ))}
        </>
    );
}

export default MinhasEncomendasAdm;