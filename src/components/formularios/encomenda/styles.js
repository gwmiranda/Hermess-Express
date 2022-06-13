import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: inline-block;
`

export const Grid2 = styled.nav`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`
export const Grid3 = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`

export const Grid21 = styled.nav`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`

export const Form = styled.form`
    width: 80%;
    margin: 0 auto;
`

export const FormComponents = styled.div``

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;

    button {
        font-size: 1.4em;
    }
`

export const TitleModal = styled.span`
    display: flex;
    justify-content: center;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    font-size: 1.4em;
    background-color: #15171C;
    font-weight: bolder;
    padding: 15px;
    color: white;
`

export const TittleCards = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    font-size: 1.8em;
    font-weight: bolder;
    margin: 10px auto;
    padding-top: 20px;
`

export const Cards = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 80%;
    height: auto;
`
export const ButtonCard = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
`