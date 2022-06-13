import {useState} from "react";
import { Chart } from "react-google-charts";

const GraficoColuna = (props) => {

    const [options, setOptions] = useState({
        title: 'Gráfico de Coluna'
    })
    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
    ])

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