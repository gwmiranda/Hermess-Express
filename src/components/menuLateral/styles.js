import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #15171C;
    height: 80px;
    display: flex;
    align-items: center;
`

export const Logo = styled.span`
    font-size: 2.5rem;
    color: white;
    padding: 25px;
    justify-content: flex-start;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    color: white;
    width: 100%;
    padding: 30px;
`

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const SlideBarNav = styled.nav`
    background: #15171C;
    width: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 400ms;
    z-index: 10;
`

export const SlideBarWrap = styled.div`
    width: 100%;
`