import './Login.css';
import {Button, Card, FormControl, TextField} from "@mui/material";
import axios from "../../axios";
import HeaderLogin from "../../components/header/HeaderLogin";

const loginRequest = async (body) => {
    return axios.post('/login', body)
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error.response)
            alert(error)
        })
}

function Login() {
    return (
        <div>
           <HeaderLogin/>
            <Card className= "card">
                <form
                    className="form"
                    onSubmit={event => {
                        console.log("Login")
                        event.preventDefault();
                    }}
                >
                    <h2>Login</h2>
                    <FormControl className="formComponent">
                        <TextField
                            id="usuario"
                            label="Usuário"
                            variant="outlined"
                            fullWidth
                            required
                            margin={"normal"}
                        />
                        <TextField
                            id="Senha"
                            type="password"
                            label="Senha"
                            variant="outlined"
                            fullWidth
                            required
                            margin={"normal"}
                        />
                        <Button
                            variant="contained"
                            type={"submit"}
                            onClick={onsubmit}
                            margin={"normal"}
                            color={"error"}
                        >Login</Button>
                        <h4>Desejo criar uma nova conta!</h4>
                        <Button
                            className={"buttonRegistrar"}
                            variant="contained"
                            margin={"normal"}
                            color={"error"}
                        >Registrar</Button>
                    </FormControl>
                </form>
            </Card>
        </div>
    );
}

export default Login;
