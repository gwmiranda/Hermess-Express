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
      </header>
    );
}

export default Header;