import {useContext, useEffect, useState} from "react";
import { Chart } from "react-google-charts";
import DataContext from "../../data/DataContext";
import axios from "../../axios";

import {
    Container,
} from "./styles"

const GraficoColuna = (props) => {
    return (
        <>
            <Container>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="BarChart"
                    data={props.data}
                    options={props.option}
                />
            </Container>
        </>
    );
}

export default GraficoColuna;