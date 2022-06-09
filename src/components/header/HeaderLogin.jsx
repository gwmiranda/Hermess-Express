import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import Button from '@material-ui/core/Button';

import {Buttons, Logo, Nav,} from "./styles";
import CadastrarUsuario from "../formularios/usuario/CadastrarUsuario";
import {Modal} from "@mui/material";
import Login from "../formularios/login/Login";
import axios from "../../axios";

const HeaderLogin = () => {

    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);
    const handleOpenLogin = () => setOpenLogin(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpenRegister(false)
        setOpenLogin(false)
    };

    const onSumbitRegister = (e, formSate) => {
        console.log(formSate)
        registerRequest(formSate)
        e.preventDefault()
    }

    const onSumbitLogin = (e, formSate) => {
        console.log(formSate)
        loginRequest(formSate)
        e.preventDefault()
    }

    const registerRequest = async (formSate) => {
        return axios.post('/user/register', formSate)
            .then((res) => {
                console.log(res)
                if(res.status === 200) {
                    navigate('/DashBoard');
                }
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
            })
    }

    const loginRequest = async (formSate) => {
        return axios.post('/auth/login', formSate)
            .then((res) => {
                console.log(res)
                if(res.status === 200) {
                    navigate('/DashBoard');
                }
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
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
                            onSubmit = { onSumbitRegister }
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
                            onSubmit = { onSumbitLogin }
                        />
                    </Modal>
                </Buttons>
            </Nav>
        </>
    )
}

export default HeaderLogin