import {Button, Card, FormControl, TextField} from "@mui/material";

function Endereco() {
    return (
        <div>
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

export default Endereco;
