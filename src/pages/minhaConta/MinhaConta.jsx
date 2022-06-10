import "./MinhaConta.css"
import { useContext, useState } from 'react';
import DataContext from '../../data/DataContext';

import CadastrarUsuario from '../../components/formularios/usuario/CadastrarUsuario';
import EditarUsuario from '../../components/formularios/usuario/EditarUsuario';
import EditarSenhaUsuario from '../../components/formularios/usuario/EditarSenhaUsuario';

import {
    Button, 
    Modal,
} from "@mui/material";
import Menu from "../../components/menuLateral/Menu";
import CadastrarEndereco from "../../components/formularios/endereco/CadastrarEndereco";

function MinhaConta() {

    const { state, setState } = useContext(DataContext)

    function setMiranda() {
        setState({
            ...state,
            nome: 'Miranda',
        })
    }

    function setSenna() {
        setState({
            ...state,
            nome: 'Senna',
        })
    }

    const stateExample = {
        nome: 'Gabriel Senna',
        cpf: '10310310325',
        nascimento: '2000-09-26',
        email: 'senna@gmail.com',
        contato: '41988887777',
    }

    const [userState, setUserState] = useState();

    const [openRegister, setOpenRegister] = useState(false);
    const [openRegisterEndereco, setOpenRegisterEndereco] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openSenhaEdit, setOpenSenhaEdit] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);
    const handleOpenRegisterEndereco = () => setOpenRegisterEndereco(true);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleOpenSenhaEdit = () => setOpenSenhaEdit(true);

    const handleClose = () => {
        setOpenRegister(false)
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
                <h1 >Minha Conta - { state.nome }</h1>
            </div>
            {/*<div>*/}
            {/*    <button onClick={() => setMiranda()}>Miranda</button>*/}
            {/*    <button onClick={() => setSenna()}>Senna</button>*/}
            {/*</div>*/}
            <div className={"content"}>
                <Button onClick={handleOpenRegister}>Cadastrar Usuário</Button>
                <Button onClick={handleOpenRegisterEndereco}>Cadastrar Endereco</Button>
                <Button onClick={handleOpenEdit}>Editar Usuário</Button>
                <Button onClick={handleOpenSenhaEdit}>Alterar Senha</Button>

                <Modal
                    open={openRegister}
                    onClose={handleClose}
                > 
                    <CadastrarUsuario
                        close = { handleClose }
                        onSubmit = { onSumbit }
                    /> 
                </Modal>

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
                        state = { stateExample }
                        close = { handleClose }
                        onSubmit = { onSumbit }
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
        </div>
    );
}

export default MinhaConta;