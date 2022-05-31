import { useContext, useState } from 'react';
import DataContext from '../../data/DataContext';
import Usuario from "../../components/formularios/Usuario/Usuario";

import {
    Button, 
    Modal,
} from "@mui/material";

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

    const initialValue = {
        nome: '',
        cpf: '',
        nascimento: '',
        email: '',
        contato: '',
        senha: '',
        confirmarSenha: '',
    }

    const [userState, setUserState] = useState(initialValue);
    // const [userUpdateState, setUserUpdateState] = useState();

    const [openRegister, setOpenRegister] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);
    const handleOpenEdit = () => setOpenEdit(true);

    const handleClose = () => {
        setOpenRegister(false)
        setOpenEdit(false)
    };

    const onSumbit = (e, formSate) => {
        console.log(formSate)
        setUserState(formSate)
        e.preventDefault()
    }

    return (
        <div className='Teste'>
            <h1>Minha Conta - { state.nome }</h1>
            <div>
                <button onClick={() => setMiranda()}>Miranda</button>
                <button onClick={() => setSenna()}>Senna</button>
            </div>
            <div>
                <Button onClick={handleOpenRegister}>Open Modal Register</Button>
                <Button onClick={handleOpenEdit}>Open Modal Edit</Button>

                <Modal
                    open={openRegister}
                    onClose={handleClose}
                    aria-labelledby="modal-title" 
                    aria-describedby="modal-description"
                > 
                    <Usuario
                        titulo = "Cadastrar Usuário"
                        botao = "Salvar"
                        state = { initialValue }
                        close = { handleClose }
                        onSubmit = { onSumbit }
                    /> 
                </Modal>

                <Modal
                    open={openEdit}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                > 
                    <Usuario
                        titulo = "Editar Usuário"
                        botao = "Editar"
                        state = { userState }
                        close = { handleClose }
                        onSubmit = { onSumbit }
                    /> 
                </Modal>
            </div>
        </div>
    );
}

export default MinhaConta;