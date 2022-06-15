import styled from 'styled-components'

export const Tittle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 25px;
    font-weight: bold;
`

export const Container = styled.div``

export const Grid2 = styled.div`
    width: 80%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    border: 1px solid gray;
    padding: 1%;
    border-radius: 15px;
`

export const Card = styled.div`
    border: 1px solid gray;
    padding: 1%;
    border-radius: 15px;
`

export const TittleCard = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    padding: 10px;
`

export const ContentCard = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
    padding: 10px;
`

export const Grid3 = styled.div`
    width: 80%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
`