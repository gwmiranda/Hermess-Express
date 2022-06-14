import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import SubMenu from '../itemMenu/Item';

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
import DataContext from "../../data/DataContext";

const Menu = () => {

  const { state, setState } = useContext(DataContext)
  const [sidebar, setSidebar] = useState(false);

  const showSlideBar = () => {
    setSidebar(!sidebar);
  }

  return (
    <>
      <Nav>
          {!state.id_permissao == '' ? (
              <NavIcon to='#'>
                  <MenuRoundedIcon
                      style={{
                          fontSize: 70,
                          color: '#fff',
                      }}
                      onClick={() => showSlideBar()}
                  />
              </NavIcon>
          ) : (<></>)}
        <Logo>HermesExpress</Logo>
        <Buttons>
          <Link to="/Rastreio">
            <Button
              style={{ 
                fontSize: 25,
                background: '#fff',
                textTransform: 'capitalize',
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              Acompanhar Rastreio
            </Button>
          </Link>
          <Link to="/Simulacao">
            <Button
              style={{ 
                fontSize: 25,
                background: '#fff',
                textTransform: 'capitalize',
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 20,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              Simulação
            </Button>
          </Link>
        </Buttons>
      </Nav>
        {!state.id_permissao == '' ? (
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
                    {state.id_permissao == 1 ? (
                        <>
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
                        </>
                    ) : (<></>)}
                    {state.id_permissao == 2 ? (
                        <>
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
                                url={"/MinhasEncomendasAdm"}
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
                        </>
                    ) : (<></>)}
                </SlideBarWrap>
            </SlideBarNav>
        ) : (<></>)
        }
    </>
  )
}

export default Menu