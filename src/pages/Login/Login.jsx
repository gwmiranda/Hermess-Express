import './Login.css';
import {Button, Card, FormControl, TextField} from "@mui/material";

function Login() {
    return (
        <div>
            <header>
                <Card className= "card">
                    <form
                        className="form"
                        onSubmit={event => {
                            console.log("Login")
                            event.preventDefault();
                        }}
                    >
                        <h2>Hermes Express</h2>
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
                            >Login</Button>
                            <Button
                                className={"buttonRegistrar"}
                                variant="contained"
                                type={"submit"}
                                onClick={onsubmit}
                                margin={"normal"}
                            >Registrar</Button>
                        </FormControl>
                    </form>
                </Card>
            </header>
        </div>
    );
}

export default Login;
