import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin: 10px auto;
    border: 1px solid gray;
    border-left: 15px solid ${props => `${props.color}`};
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 10fr;
    gap: 20px;
`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
`

export const ContainerTittle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

`

export const Tittle = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    font-size: 1.2rem;

    span {
        font-size: 1.3rem;
        font-weight: bold;
    }
`

export const EndColeta = styled.div`
    display: flex;
    justify-content: start;
    margin: 10px 0;
    font-size: 1.3rem;
`

export const EndEntrega = styled.div`
    display: flex;
    justify-content: start;
    margin: 10px 0;
    font-size: 1.3rem;
`