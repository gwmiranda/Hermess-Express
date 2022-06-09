import './Veiculos.css';
import Menu from "../../components/menuLateral/Menu";
import {useState} from "react";
import {Button, Modal} from "@mui/material";
import CadastrarTipoVeiculo from "../../components/formularios/veiculo/CadastrarTipoVeiculo";
import CadastrarTipoEntrega from "../../components/formularios/tipoEntrega/CadastrarTipoEntrega";
import CadastrarVeiculo from "../../components/formularios/veiculo/CadastrarVeiculo";

function Veiculos() {

    const [openRegisterTipoVeiculo, setOpenRegisterTipoVeiculo] = useState(false);
    const [openRegisterVeiculo, setOpenRegisterVeiculo] = useState(false);
    const [openRegisterTipoEntrega, setOpenRegisterTipoEntrega] = useState(false);

    const handleOpenRegisterTipoVeiculo = () => setOpenRegisterTipoVeiculo(true);
    const handleOpenRegisterVeiculo = () => setOpenRegisterVeiculo(true);
    const handleOpenRegisterTipoEntrega = () => setOpenRegisterTipoEntrega(true);

    const handleClose = () => {
        setOpenRegisterTipoVeiculo(false)
        setOpenRegisterVeiculo(false)
        setOpenRegisterTipoEntrega(false)
    };


    return (
        <>
            <Menu/>
            <div className='Teste'>
                <h1>Meus Veiculos</h1>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegisterTipoVeiculo}>Cadastrar Tipo Veiculo</Button>

                <Modal
                    open={openRegisterTipoVeiculo}
                    onClose={handleClose}
                >
                    <CadastrarTipoVeiculo
                        close = { handleClose }
                    />
                </Modal>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegisterVeiculo}>Cadastrar Tipo Entrega</Button>

                <Modal
                    open={openRegisterVeiculo}
                    onClose={handleClose}
                >
                    <CadastrarTipoEntrega
                        close = { handleClose }
                    />
                </Modal>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegisterVeiculo}>Cadastrar Veiculo</Button>

                <Modal
                    open={openRegisterVeiculo}
                    onClose={handleClose}
                >
                    <CadastrarVeiculo
                        close = { handleClose }
                    />
                </Modal>
            </div>
        </>
    );
}

export default Veiculos;