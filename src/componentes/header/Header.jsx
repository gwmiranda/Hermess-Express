import './Header.css';
import Logo from '../../images/Logo.png'
import {Button} from "@mui/material";

function Header() {
    return (
      <header>
        <div class='center'>
            <span class='logo'>
                <img src={Logo}/>
                <Button
                       className="BtnRegistrar"
                       variant="contained"
                       margin={"normal"}
                       color={"error"}> Registrar</Button>
                <Button
                       className="BtnLogin"
                       variant="contained"
                       margin={"normal"}
                       color={"error"}>Login</Button>
            </span>
        </div>
      </header>
    );
}

export default Header;