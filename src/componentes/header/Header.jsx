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
                       <Button
                       className="BtnFrota"
                       variant="contained"
                       margin={"normal"}
                       > Minha Frota</Button>
                       <Button
                       className="BtnEmpresa"
                       variant="contained"
                       margin={"normal"}
                       > Minha Empresa</Button>
                       <Button
                       className="BtnConta"
                       variant="contained"
                       margin={"normal"}
                       > Minha Conta</Button>
            </span>
        </div>
      </header>
    );
}

export default Header;