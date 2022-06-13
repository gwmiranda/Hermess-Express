import React, { useContext, useState } from 'react';
import DataContext from '../../data/DataContext';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import {
    Container,
    ContainerGrid,
    ContainerPhoto,
    Photo,
    ContainerData,
    TittleContainer,
    ContainerDataGrid2,
    ContainerDataGrid3,
    Label,
    Content
} from "./styles"

import {
    Button, Modal,
} from "@mui/material";
import EditarUsuario from "../formularios/usuario/EditarUsuario";
import EditarSenhaUsuario from "../formularios/usuario/EditarSenhaUsuario";

const MinhaConta = () => {

    const { state, setState } = useContext(DataContext)

    const [openEdit, setOpenEdit] = useState(false);
    const [openSenhaEdit, setOpenSenhaEdit] = useState(false);

    const handleOpenEdit = () => setOpenEdit(true);
    const handleOpenSenhaEdit = () => setOpenSenhaEdit(true);

    const handleClose = () => {
        setOpenEdit(false)
        setOpenSenhaEdit(false)
    };

    return (
        <Container>
            <TittleContainer>
                <div>
                    { state.nome }
                </div>
                <div>
                    <Button
                        onClick={() => handleOpenEdit()}
                        variant="contained"
                        color="primary"
                        style={{margin: "2px"}}
                        startIcon={<AddCircleOutlineIcon />}>
                      Editar Informações
                    </Button>
                    <Button
                        color="primary"
                        onClick={() => handleOpenSenhaEdit()}
                        variant="contained"
                        style={{margin: "2px"}}
                        startIcon={<AddCircleOutlineIcon />}>
                      Editar Senha
                    </Button>

                    <Modal
                        open={openEdit}
                        onClose={handleClose}
                    >
                        <EditarUsuario
                            close = { handleClose }
                            state = { state }
                        />
                    </Modal>
                    <Modal
                        open={openSenhaEdit}
                        onClose={handleClose}
                    >
                        <EditarSenhaUsuario
                            close = { handleClose }
                        />
                    </Modal>
                </div>
            </TittleContainer>
            <ContainerGrid>
                <ContainerPhoto>
                    <Photo>
                        <p>Foto</p>
                    </Photo>
                </ContainerPhoto>
                <ContainerData>
                    <ContainerDataGrid2>
                        <Label>
                            E-mail:
                            <div>
                                <span>{ state.email }</span>
                            </div>
                        </Label>
                        <Label>
                            Cpf:
                            <div>
                                <span>{ state.cpf }</span>
                            </div>
                        </Label>
                    </ContainerDataGrid2>
                    <ContainerDataGrid3>
                        <Label>
                            Sexo:
                            <div>
                                <span>{ state.sexo == 'M' ? "Masculino" : "Feminino" }</span>
                            </div>
                        </Label>
                        <Label>
                            Data Nascimento:
                            <div>
                                <span>{ state.data_nascimento }</span>
                            </div>
                        </Label>
                        <Label>
                            Contato:
                            <div>
                            <span>{ state.contato }</span>
                            </div>
                        </Label>
                    </ContainerDataGrid3>
                </ContainerData>
            </ContainerGrid>
        </Container>
    )
}

export default MinhaConta