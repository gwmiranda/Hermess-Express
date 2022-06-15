import {useContext, useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import DataContext from "../../data/DataContext";
import axios from "../../axios";

const GraficoPizza = (props) => {
    return (
        <>
            <Chart
                width={'100%'}
                height={'400px'}
                chartType="PieChart"
                data={props.data}
                options={props.optionsLinha}
            />
        </>
    );
}

export default GraficoPizza;