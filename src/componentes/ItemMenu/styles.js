import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SideBarLink = styled(Link)`
    display: flex;
    color: #E1E9FC;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #FFF;
        cursor: pointer;
    }
`

export const SideBarLabel = styled.span`
    margin-left: 15px;
    font-size: 1.5rem;
    font-weight: bolder;
`