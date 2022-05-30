import React, { useState } from 'react';
import SubMenu from '../ItemMenu/Item';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import StoreIcon from '@material-ui/icons/Store';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import Button from '@material-ui/core/Button';

import { 
  Nav, 
  Logo,
  Buttons,
  NavIcon,
  SlideBarNav,
  SlideBarWrap,
} from "./styles";

const Menu = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSlideBar = () => {
    setSidebar(!sidebar);
  }

  return (
    <>
      <Nav>
        <NavIcon to='#'>
          <MenuRoundedIcon 
            style={{ 
              fontSize: 70,
              color: '#fff',
            }}
            onClick={() => showSlideBar()}
          />
        </NavIcon>
        <Logo>HermesExpress</Logo>
        <Buttons>
          <Button
            href="/Rastreio"
            style={{ 
              fontSize: 25,
              background: '#fff',
              textTransform: 'capitalize',
              padding: 7,
              borderRadius: 20,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            Acompanhar Rastreio
          </Button>
          <Button
            href="/Simulacao"
            style={{ 
              fontSize: 25,
              background: '#fff',
              textTransform: 'capitalize',
              padding: 7,
              borderRadius: 20,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            Simulação
          </Button>
        </Buttons>
      </Nav>

      <SlideBarNav sidebar={sidebar}>
        <SlideBarWrap>
          <NavIcon to='#'>
          <CloseIcon 
            style={{ 
              fontSize: 50,
              color: '#fff',
            }}
            onClick={() => showSlideBar()}
          />
          </NavIcon>
          <SubMenu 
            url={"/MinhaConta"}
            icone={
              <PersonIcon 
                style={{ 
                  fontSize: 60,
                  color: '#fff',
                }}
              />}
            descricao={"Perfil"}
          />
          <SubMenu 
            url={"/MinhasEncomendas"}
            icone={
              <BusinessCenterIcon 
                style={{ 
                  fontSize: 60,
                  color: '#fff',
                }}
              />}
            descricao={"Encomendas"}
          />
          <SubMenu 
            url={"/DashBoard"}
            icone={
              <EqualizerIcon 
                style={{ 
                  fontSize: 60,
                  color: '#fff',
                }}
              />}
            descricao={"DashBoard"}
          />
          <SubMenu 
            url={"/ManterEmpresa"}
            icone={
              <StoreIcon 
                style={{ 
                  fontSize: 60,
                  color: '#fff',
                }}
              />}
            descricao={"Empresas"}
          />
          <SubMenu 
            url={"/Veiculos"}
            icone={
              <LocalShippingIcon 
                style={{ 
                  fontSize: 60,
                  color: '#fff',
                }}
              />}
            descricao={"Veiculos"}
          />
        </SlideBarWrap>
      </SlideBarNav>

    </>
  )
}

export default Menu