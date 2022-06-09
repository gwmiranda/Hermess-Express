import './MinhasEncomendas.css';
import Menu from "../../components/menuLateral/Menu";
import {useState} from "react";
import {Button, Modal} from "@mui/material";
import CadastrarEncomenda from "../../components/formularios/encomenda/CadastrarEncomenda";
import CadastrarCaixa from "../../components/formularios/caixa/CadastrarCaixa";

function MinhasEncomendas() {

    const [openRegisterEncomenda, setOpenRegisterEncomenda] = useState(false);
    const [openRegisterCaixa, setOpenRegisterCaixa] = useState(false);

    const handleOpenRegisterEncomenda = () => setOpenRegisterEncomenda(true);
    const handleOpenRegisterCaixa = () => setOpenRegisterCaixa(true);

    const handleClose = () => {
        setOpenRegisterEncomenda(false)
        setOpenRegisterCaixa(false)
    };


    return (
        <>
            <Menu/>
            <div className='Teste'>
                <h1>Minhas Encomendas</h1>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegisterEncomenda}>Cadastrar Encomenda</Button>

                <Modal
                    open={openRegisterEncomenda}
                    onClose={handleClose}
                >
                    <CadastrarEncomenda
                        close = { handleClose }
                    />
                </Modal>
            </div>
            <div className={"content"}>
                <Button onClick={handleOpenRegisterCaixa}>Cadastrar Caixa</Button>

                <Modal
                    open={openRegisterCaixa}
                    onClose={handleClose}
                >
                    <CadastrarCaixa
                        close = { handleClose }
                    />
                </Modal>
            </div>
        </>
    );
}

export default MinhasEncomendas;