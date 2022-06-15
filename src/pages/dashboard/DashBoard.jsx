import './Dashboard.css';
import Menu from "../../components/menuLateral/Menu";
import GraficoPizza from "../../components/graficos/GraficoPizza";
import GraficoColuna from "../../components/graficos/GraficoColuna";
import DataContext from "../../data/DataContext";
import {useContext, useEffect, useState} from "react";
import axios from "../../axios";

import {
    Container,
    Tittle,
    Grid2,
    Grid3,
    Card,
    TittleCard,
    ContentCard
} from "./styles"

const DashBoard = () => {

    const {state, setState} = useContext(DataContext)

    const [optionsPizza, setOptionsPizza] = useState({
        title: 'Encomendas por tipo de entregas'
    })

    const [optionsLinha, setOptionsLinha] = useState({
        title: 'Valor Total por tipo de entregas'
    })

    const [dataPizza, setDataPizza] = useState([
        ['Tipo Entrega', 'Quantidade'],
        ['Hermes Express', 0],
        ['Hermes Standard', 0],
        ['Hermes Tork', 0],
    ])
    const [dataLinha, setDataLinha] = useState([
        ['Tipo Entrega', 'Quantidade'],
        ['Hermes Express', 0],
        ['Hermes Standard', 0],
        ['Hermes Tork', 0],
    ])

    const [dataGrid, setDataGrid] = useState({
        sumAll: '',
        countAll: '',
        km: '' 
    })

    const response = async () => {
        
        if (state.id_permissao == 2) {
            console.log('pinto');
            return axios.get(`/package/getValuesGraficos`)
            .then((res) => {
                setDataPizza([
                    ['Tipo Entrega', 'Quantidade'],
                    ['Hermes Express', res.data.data.count.HermesExpress],
                    ['Hermes Standard', res.data.data.count.HermesStandard],
                    ['Hermes Tork', res.data.data.count.HermesTork],
                ])
                setDataLinha([
                    ['Tipo Entrega', 'Quantidade'],
                    ['Hermes Express', res.data.data.sum.HermesExpress],
                    ['Hermes Standard', res.data.data.sum.HermesStandard],
                    ['Hermes Tork', res.data.data.sum.HermesTork],
                ])
                setDataGrid({
                    sumAll: res.data.data.sumAll,
                    countAll: res.data.data.countAll,
                    km: res.data.data.Km
                })
            })
            .catch((error) => {
                console.log(error.response);
            })
        } else {
            console.log('cu');
            return axios.get(`/package/getValuesGraficosUser/${state.id}`)
            .then((res) => {
                setDataPizza([
                    ['Tipo Entrega', 'Quantidade'],
                    ['Hermes Express', res.data.data.count.HermesExpress],
                    ['Hermes Standard', res.data.data.count.HermesStandard],
                    ['Hermes Tork', res.data.data.count.HermesTork],
                ])
                setDataLinha([
                    ['Tipo Entrega', 'Quantidade'],
                    ['Hermes Express', res.data.data.sum.HermesExpress],
                    ['Hermes Standard', res.data.data.sum.HermesStandard],
                    ['Hermes Tork', res.data.data.sum.HermesTork],
                ])
                setDataGrid({
                    sumAll: res.data.data.sumAll,
                    countAll: res.data.data.countAll,
                    km: res.data.data.Km
                })
            })
            .catch((error) => {
                console.log(error.response);
            })
        }
    }

    useEffect(() => {
        response();
    }, [])

  return (
      <>
        <Menu/>
        <Tittle>
            DashBoard
        </Tittle>
        <Container>
            <Grid3>
                <Card>
                    <TittleCard>Custo total:</TittleCard>
                    <ContentCard>R$: {dataGrid.sumAll}</ContentCard>
                </Card>
                <Card>
                    <TittleCard>Entregas solicitadas:</TittleCard>
                    <ContentCard>{dataGrid.countAll}</ContentCard>
                </Card>
                <Card>
                    <TittleCard>Quilometros rodados:</TittleCard>
                    <ContentCard>{dataGrid.km} Km's</ContentCard>
                </Card>
            </Grid3>
            <Grid2>
                <GraficoPizza
                    data={dataPizza}
                    option={optionsPizza}
                />
                <GraficoColuna
                    data={dataLinha}
                    option={optionsLinha}
                />
            </Grid2>
        </Container>
      </>
  )
}

export default DashBoard