import './MinhasEncomendas.css';
import Menu from "../../components/menuLateral/Menu";
import {useState} from "react";
import {Button, Modal} from "@mui/material";
import CadastrarEncomenda from "../../components/formularios/encomenda/CadastrarEncomenda";
import CadastrarCaixa from "../../components/formularios/caixa/CadastrarCaixa";
import CadastrarEntregaColeta from "../../components/formularios/entregaColeta/CadastrarEntregaColeta";

function MinhasEncomendas() {

    const [openRegisterEncomenda, setOpenRegisterEncomenda] = useState(false);
    const [openRegisterCaixa, setOpenRegisterCaixa] = useState(false);
    const [openRegisterEntregaColeta, setOpenRegisterEntregaColeta] = useState(false);

    const handleOpenRegisterEncomenda = () => setOpenRegisterEncomenda(true);
    const handleOpenRegisterCaixa = () => setOpenRegisterCaixa(true);
    const handleOpenRegisterEntregaColeta = () => setOpenRegisterEntregaColeta(true);

    const handleClose = () => {
        setOpenRegisterEncomenda(false)
        setOpenRegisterCaixa(false)
        setOpenRegisterEntregaColeta(false)
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
            <div className={"content"}>
                <Button onClick={handleOpenRegisterEntregaColeta}>Cadastrar Entrega COleta</Button>

                <Modal
                    open={openRegisterEntregaColeta}
                    onClose={handleClose}
                >
                    <CadastrarEntregaColeta
                        close = { handleClose }
                    />
                </Modal>
            </div>
        </>
    );
}

export default MinhasEncomendas;