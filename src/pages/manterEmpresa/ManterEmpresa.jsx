import './ManterEmpresa.css';
import Menu from "../../components/menuLateral/Menu";
import {useContext, useState} from "react";
import DataContext from "../../data/DataContext";
import {Button, Modal} from "@mui/material";
import CadastrarUsuario from "../../components/formularios/usuario/CadastrarUsuario";
import CadastrarEndereco from "../../components/formularios/endereco/CadastrarEndereco";
import EditarUsuario from "../../components/formularios/usuario/EditarUsuario";
import EditarSenhaUsuario from "../../components/formularios/usuario/EditarSenhaUsuario";
import CadastrarEmpresa from "../../components/formularios/empresa/CadastrarEmpresa";

function ManterEmpresa() {

    const { state, setState } = useContext(DataContext)

    const [userState, setUserState] = useState();

    const [openRegister, setOpenRegister] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);

    const handleClose = () => {
        setOpenRegister(false)
    };

    return (
        <div>
            <Menu/>
            <div className={"title"}>
                <h1 >Minha Conta - { state.nome }</h1>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegister}>Cadastrar Empresa</Button>

                <Modal
                    open={openRegister}
                    onClose={handleClose}
                >
                    <CadastrarEmpresa
                        close = { handleClose }
                    />
                </Modal>
            </div>
        </div>
    );
}

export default ManterEmpresa;