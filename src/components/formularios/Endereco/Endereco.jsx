import './Login.css';
import {Button, Card, FormControl, TextField} from "@mui/material";
import axios from "../../axios";
import {useState} from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>
            <header className={"header"}>
                <h1>Hermes Express</h1>
            </header>
            <Card className= "card">
                <form
                    className="form"
                    onSubmit={event => {
                        loginRequest()
                    }}
                >
                    <h2>Login</h2>
                    <FormControl className="formComponent">
                        <TextField
                            value={email}
                            onChange={event => {
                                setEmail(event.target.value)
                            }}
                            name="email"
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            margin={"normal"}
                        />
                        <TextField
                            value={password}
                            onChange={event => {
                                setPassword(event.target.value)
                            }}
                            name="senha"
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
                            onClick={onsubmit}
                        >Registrar</Button>
                    </FormControl>
                </form>
            </Card>
        </div>
    );
}

export default Login;