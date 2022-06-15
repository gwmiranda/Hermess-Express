import React from 'react'

import {
    Container,
    Icon,
    ContainerTittle,
    Tittle,
    EndColeta,
    EndEntrega
} from "./styles";

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import TwoWheelerRoundedIcon from '@mui/icons-material/TwoWheelerRounded';

const CardEncomendas = (props) => {

    function verifyIcon() {
        if (props.veiculo == 1){
            return (
            <TwoWheelerRoundedIcon
                sx={{ fontSize: 80, padding: 2 }}
            />
            )
        }
        if (props.veiculo == 2){
            return (
                <AirportShuttleIcon
                    sx={{ fontSize: 80, padding: 2 }}
                />
            )
        }
        if (props.veiculo == 3){
            return (
                <LocalShippingIcon
                    sx={{ fontSize: 80, padding: 2 }}
                />
            )
        }
    }

    function verifyStatus() {
        if (props.status == 'Entregue') return '#11d399';
        if (props.status == 'Encomenda Coletada') return '#F2CB15';
        if (props.status == 'Em transporte') return '#FF8310';
        if (props.status == 'Logistico') return '#1491d4';
    }

  return (
    <Container color={verifyStatus()}>
        <Icon>
            {verifyIcon()}
        </Icon>
        <div>
            <ContainerTittle>
                <Tittle style={{justifyContent: 'start'}}>
                    <span>{props.status}</span>
                </Tittle>
                <Tittle>
                    <span>{props.token}</span>
                </Tittle>
                <Tittle>
                    <span style={{color: 'green'}}>R$ {props.valor}</span>
                </Tittle>
            </ContainerTittle>
            <EndColeta>
                Endereço de coleta: {props.coleta}
            </EndColeta>
            <EndEntrega>
                Endereço de entrega: {props.entrega}
            </EndEntrega>
        </div>
    </Container>
  )
}

export default CardEncomendas