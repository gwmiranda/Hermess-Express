import "./MinhaConta.css"
import { useContext, useState } from 'react';
import DataContext from '../../data/DataContext';

import CadastrarUsuario from '../../components/formularios/usuario/CadastrarUsuario';
import EditarUsuario from '../../components/formularios/usuario/EditarUsuario';
import EditarSenhaUsuario from '../../components/formularios/usuario/EditarSenhaUsuario';

import MinhaContaComponent from "../../components/minhaConta/MinhaConta";

import {
    Button, 
    Modal,
} from "@mui/material";
import Menu from "../../components/menuLateral/Menu";
import CadastrarEndereco from "../../components/formularios/endereco/CadastrarEndereco";
import MeusEnderecos from "../../components/meusEnderecos/MeusEnderecos";

function MinhaConta() {

    const { state, setState } = useContext(DataContext)

    const [userState, setUserState] = useState();

    const [openRegisterEndereco, setOpenRegisterEndereco] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openSenhaEdit, setOpenSenhaEdit] = useState(false);

    const handleOpenRegisterEndereco = () => setOpenRegisterEndereco(true);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleOpenSenhaEdit = () => setOpenSenhaEdit(true);

    const handleClose = () => {
        setOpenRegisterEndereco(false)
        setOpenEdit(false)
        setOpenSenhaEdit(false)
    };

    const onSumbit = (e, formSate) => {
        console.log(formSate)
        setUserState(formSate)
        e.preventDefault()
    }

    return (
        <div>
            <Menu/>
            <div className={"title"}>
                <h1 >Minha Conta</h1>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegisterEndereco}>Cadastrar Endereco</Button>
                <Button onClick={handleOpenEdit}>Editar Usuário</Button>
                <Button onClick={handleOpenSenhaEdit}>Alterar Senha</Button>

                <Modal
                    open={openRegisterEndereco}
                    onClose={handleClose}
                >
                    <CadastrarEndereco
                        close = { handleClose }
                    />
                </Modal>

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
                        onSubmit = { onSumbit }
                    /> 
                </Modal>
            </div>
            <div>
            <MinhaContaComponent />
            </div>
            <div className={"title"}>
                <h1 >Meus Endereços</h1>
            </div>
            <div>
                <MeusEnderecos>
                    
                </MeusEnderecos>
            </div>
        </div>
    );
}

export default MinhaConta;