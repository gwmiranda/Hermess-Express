import './Inicial.css';
import HeaderLogin from "../../components/header/HeaderLogin";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Inicial() {
    return (
        <>
            <HeaderLogin/>
            <div className={"contentInicial"}>
                <div>
                    <h1 className={"h1"}>HermesExpress</h1>
                </div>
                <div className={"h2"}>
                    <h2>Para quem almeja o sucesso!</h2>
                </div>
                <div className={"h2"}>
                    <h2>Nós entregamos.</h2>
                </div>
                <div className={"buttons"}>
                    <Link to={"/Simulacao"}>
                        <Button
                            variant="contained"
                            margin={"normal"}
                        >Simular Entrega</Button>
                    </Link>
                    <Link to={"/AcompanharEnvio"}>
                        <Button
                            variant="contained"
                            margin={"normal"}
                        >Acompanhar Envio</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Inicial;