import React from 'react'

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import TwoWheelerRoundedIcon from '@mui/icons-material/TwoWheelerRounded';

import {
    Container,
    Tittle,
    Valor
} from "./styles";

const CardVeiculos = (props) => {

    function verifyId() {
        if (props.id == 0) return 'Hermess Express';
        if (props.id == 1) return 'Hermess Stantard';
        if (props.id == 2) return 'Hermess Tork';
    }

    function verifyIcon() {
        if (props.id == 0){
            return (
            <TwoWheelerRoundedIcon
                sx={{ fontSize: 80, padding: 2 }}
            />
            )
        }
        if (props.id == 1){
            return (
                <AirportShuttleIcon
                    sx={{ fontSize: 80, padding: 2 }}
                />
            )
        }
        if (props.id == 2){
            return (
                <LocalShippingIcon
                    sx={{ fontSize: 80, padding: 2 }}
                />
            )
        }
    }

    function setDescription() {
        if (isNaN(parseFloat(props.value))) {
            return 'Veiculo indisponível'
        } 
        return `R$: ${props.value}`
    }

  return (
    <Container >
        <Tittle>{verifyId()}</Tittle>
        <Valor >{setDescription()}</Valor>
        {verifyIcon()}
    </Container>
  )
}

export default CardVeiculos