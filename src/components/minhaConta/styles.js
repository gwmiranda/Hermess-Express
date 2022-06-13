import styled from 'styled-components'

export const Container = styled.div`
    margin: 25px auto;
    width: 90%;
    border: 2.5px solid transparent;
    border-radius: 25px;
    overflow:hidden;
`
export const TittleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background-color: black;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 15px;
`

export const ContainerGrid = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 5fr;
`

export const ContainerPhoto = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px auto 0;
`

export const Photo = styled.div`
    width: 70%;
    border-radius: 20%;
    position: relative;
    border: 2.5px solid gray;

    p {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.6rem;
    }
`

export const ContainerData = styled.div``

export const ContainerDataGrid2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    width: 90%;
    margin: 15px auto;
`

export const ContainerDataGrid3 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    width: 90%;
    margin: 15px auto;
`

export const Label = styled.span`
    display: block;
    font-size: 1.3rem;

    span {
        font-size: 1.5rem;
    }
`
