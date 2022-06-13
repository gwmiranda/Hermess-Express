import {useState} from "react";
import { Chart } from "react-google-charts";

const GraficoPizza = (props) => {

    const [options, setOptions] = useState({
        title: 'Gráfico de Pizza'
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
                chartType="PieChart"
                data={data}
                options={options}
            />
        </>
    );
}

export default GraficoPizza;