import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';

import {Buttons, Logo, Nav,} from "./styles";
import CadastrarUsuario from "../formularios/usuario/CadastrarUsuario";
import {Modal} from "@mui/material";
import Login from "../formularios/login/Login";
import axios from "../../axios";

const HeaderLogin = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSlideBar = () => {
        setSidebar(!sidebar);
    }

    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);
    const handleOpenLogin = () => setOpenLogin(true);

    const handleClose = () => {
        setOpenRegister(false)
        setOpenLogin(false)
    };

    const onSumbit = (e, formSate) => {
        console.log(formSate)
        loginRequest(formSate)
        e.preventDefault()
    }

    const loginRequest = async (formSate) => {
        return axios.post('/register', formSate)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error.response)
                alert(error)
            })
    }

    return (
        <>
            <Nav>
                <Link to="/">
                    <Logo>HermesExpress</Logo>
                </Link>
                <Buttons>
                    <Button
                        onClick={handleOpenRegister}
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
                        Cadastro
                    </Button>

                    <Modal
                        open={openRegister}
                        onClose={handleClose}
                    >
                        <CadastrarUsuario
                            close = { handleClose }
                            onSubmit = { onSumbit }
                        />
                    </Modal>

                    <Button
                        onClick={handleOpenLogin}
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
                        Login
                    </Button>

                    <Modal
                        open={openLogin}
                        onClose={handleClose}
                    >
                        <Login
                            close = { handleClose }
                            onSubmit = { onSumbit }
                        />
                    </Modal>
                </Buttons>
            </Nav>
        </>
    )
}

export default HeaderLogin