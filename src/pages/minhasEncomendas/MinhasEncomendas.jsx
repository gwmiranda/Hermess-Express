import './MinhasEncomendas.css';
import Menu from "../../components/menuLateral/Menu";
import {useContext, useEffect, useState} from "react";
import DataContext from "../../data/DataContext";
import axios from "../../axios";

function MinhasEncomendas() {

    const {state, setState} = useContext(DataContext)
    const [encomendas, setEncomendas] = useState([])

    useEffect(() => {
        responseListaEncomendas();
    }, [])

    const responseListaEncomendas = async () => {
        return axios.get(`/package/getByUserId/${state.id}`)
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
                <h1>Minhas Encomendas</h1>
            </div>
            <table>
                <thead>
                <td>ID</td>
                <td>Logradouro - Coleta</td>
                <td>Numero - Coleta</td>
                <td>Complemento - Coleta</td>
                <td>Bairro - Coleta</td>
                <td>Cidade - Coleta</td>
                <td>Estado - Coleta</td>
                <td>Cep - Coleta</td>
                <td>Logradouro - Coleta</td>
                <td>Numero - Entrega</td>
                <td>Complemento - Entrega</td>
                <td>Bairro - Entrega</td>
                <td>Cidade - Entrega</td>
                <td>Estado - Entrega</td>
                <td>Cep - Entrega</td>
                <td>Valor Total</td>
                </thead>
                {encomendas.map((enc) => (
                        <tbody>
                        <td>{enc.id}</td>
                        <td>{enc.logradouro_coleta}</td>
                        <td>{enc.numero_coleta}</td>
                        <td>{enc.bairro_coleta}</td>
                        <td>{enc.cidade_coleta}</td>
                        <td>{enc.estado_coleta}</td>
                        <td>{enc.cep_coleta}</td>
                        <td>{enc.id}</td>
                        <td>{enc.logradouro_entrega}</td>
                        <td>{enc.numero_entrega}</td>
                        <td>{enc.bairro_entrega}</td>
                        <td>{enc.cidade_entrega}</td>
                        <td>{enc.estado_entrega}</td>
                        <td>{enc.cep_entrega}</td>
                        <td>{enc.valor_entrega}</td>
                        </tbody>
                    ))}
            </table>
        </>
    );
}

export default MinhasEncomendas;