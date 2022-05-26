import './Rastreio.css';
import {Button, Card, Input, TextField} from "@mui/material";

function Rastreio() {
    return (
        <><p>Tela Rastreio</p>
        <p>Informe o Token recebido pelo vendedor!</p>
        <div class="input">
            <input type="text" placeholder="Insira o Token..."></input>
                <button class="ui button">Rastrear</button>
            </div>
            </>
    );
}

export default Rastreio;