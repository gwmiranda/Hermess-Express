import './Header.css';
import Logo from '../../images/Logo.png'
import {Button} from "@mui/material";

function Header() {
    return (
      <header>
        <div className='center'>
            <span className='logo'>
                <img src={Logo}/>
                <Button
                       className="BtnRegistrar"
                       variant="contained"
                       margin={"normal"}
                       > Registrar</Button>
                <Button
                       className="BtnLogin"
                       variant="contained"
                       margin={"normal"}
                       >Login</Button>
            </span>
        </div>
        <div classname='texto'>
                <h1>Para quem almeja o sucesso!</h1>
                    <h2>Nós entregamos.</h2>
        </div>
              <div className='rodape'>
                    <span className='opcoes'>
                        <Button
                               className="BtnSolicitarEntrega"
                               variant="contained"
                               margin={"normal"}
                               > Solicitar Entrega</Button>
                        <Button
                               className="BtnAcompanharEnvio"
                               variant="contained"
                               margin={"normal"}
                               >Acompanhar Envio</Button>
                        <Button
                               className="BtnContratarEntregador"
                               variant="contained"
                               margin={"normal"}
                               >Contratar Entregador</Button>
                    </span>
                </div>
      </header>
    );
}

export default Header;