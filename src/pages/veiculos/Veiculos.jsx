import './Veiculos.css';
import Menu from "../../components/menuLateral/Menu";
import {useState} from "react";
import {Button, Modal} from "@mui/material";
import CadastrarTipoVeiculo from "../../components/formularios/veiculo/CadastrarTipoVeiculo";
import CadastrarVeiculo from "../../components/formularios/veiculo/CadastrarVeiculo";

function Veiculos() {

    const [openRegister, setOpenRegister] = useState(false);

    const handleOpenRegister = () => setOpenRegister(true);

    const handleClose = () => {
        setOpenRegister(false)
    };


    return (
        <>
            <Menu/>
            <div className='Teste'>
                <h1>Meus Veiculos</h1>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegister}>Cadastrar Tipo Veículo</Button>

                <Modal
                    open={openRegister}
                    onClose={handleClose}
                >
                    <CadastrarTipoVeiculo
                        close = { handleClose }
                    />
                </Modal>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegister}>Cadastrar Veículo</Button>

                <Modal
                    open={openRegister}
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