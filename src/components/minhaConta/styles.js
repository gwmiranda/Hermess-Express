import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 25px auto;
    width: 80%;
    border: 2.5px solid gray;
    border-radius: 25px;
    padding: 25px;
`

export const ContainerPhoto = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`

export const Photo = styled.div`
    width: 80%;
    border-radius: 50%;
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

export const TittleContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 8px 0;
    font-size: 1.8rem;
    font-weight: bold;
`

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
