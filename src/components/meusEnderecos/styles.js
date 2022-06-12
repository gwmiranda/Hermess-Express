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

export const Table = styled.table`
    width: 90%;
    margin: 0 auto;
    box-sizing: border-box; 
    overflow:hidden;
    border-collapse: collapse;
    text-align: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    thead {
        th {
            padding: 15px;
            font-size: 1.4rem;
            font-weight: bold;
            color: white;
            background-color: black;
        }
    }

    tbody {
        border: 1px solid black;

        td {
            padding: 10px;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
`