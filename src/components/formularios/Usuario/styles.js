import styled from 'styled-components'

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

export const Grid3_1 = styled.nav`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`

export const Form = styled.form`
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    width: 60%;
`

export const FormComponents = styled.div`
    padding: 20px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #D3D3D3;
    margin-top: 15px;
    padding: 20px;

    button {
        margin-left: 10px;
        font-size: 1.2em;
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