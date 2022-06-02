import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';

import {Buttons, Logo, Nav,} from "./styles";
import CadastrarUsuario from "../formularios/usuario/CadastrarUsuario";
import {Modal} from "@mui/material";

const HeaderLogin = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSlideBar = () => {
        setSidebar(!sidebar);
    }

    const [openRegister, setOpenRegister] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);

    const handleClose = () => {
        setOpenRegister(false)
    };

    const onSumbit = (e, formSate) => {
        console.log(formSate)
        e.preventDefault()
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

                    <Link to="/Login">
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
                            Login
                        </Button>
                    </Link>
                </Buttons>
            </Nav>
        </>
    )
}

export default HeaderLogin