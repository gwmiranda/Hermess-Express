import {useContext, useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import DataContext from "../../data/DataContext";
import axios from "../../axios";

const GraficoColuna = (props) => {

    const {state, setState} = useContext(DataContext)

    const [options, setOptions] = useState({
        title: 'Encomendas por tipo de entregas'
    })
    const [data, setData] = useState([
        ['Tipo Entrega', 'Quantidade'],
        ['Hermes Express', 0],
        ['Hermes Standard', 0],
        ['Hermes Tork', 0],
    ])

    useEffect(() => {
        response();
    }, [])

    const response = async () => {
        return axios.get(`/package/getGroupByUserId/${state.id}`)
            .then((res) => {
                setData([
                    ['Tipo Entrega', 'Quantidade'],
                    ['Hermes Express', res.data.data.encomenda[1].HermesExpress],
                    ['Hermes Standard', res.data.data.encomenda[2].HermesStandard],
                    ['Hermes Tork', res.data.data.encomenda[3].HermesTork],
                ])
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
            })
    }

    return (
        <>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                data={data}
                options={options}
            />
        </>
    );
}

export default GraficoColuna;