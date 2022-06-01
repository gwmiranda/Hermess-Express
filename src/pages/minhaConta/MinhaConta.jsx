import { useContext, useState } from 'react';
import DataContext from '../../data/DataContext';

import CadastrarUsuario from '../../components/formularios/usuario/CadastrarUsuario';
import EditarUsuario from '../../components/formularios/usuario/EditarUsuario';
import EditarSenhaUsuario from '../../components/formularios/usuario/EditarSenhaUsuario';

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

    const stateExample = {
        nome: 'Gabriel Senna',
        cpf: '10310310325',
        nascimento: '2000-09-26',
        email: 'senna@gmail.com',
        contato: '41988887777',
    }

    const [userState, setUserState] = useState();

    const [openRegister, setOpenRegister] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openSenhaEdit, setOpenSenhaEdit] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleOpenSenhaEdit = () => setOpenSenhaEdit(true);

    const handleClose = () => {
        setOpenRegister(false)
        setOpenEdit(false)
        setOpenSenhaEdit(false)
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
                <Button onClick={handleOpenSenhaEdit}>Open Modal Senha Edit</Button>

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