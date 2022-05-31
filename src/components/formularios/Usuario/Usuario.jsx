import {Button, Card, FormControl, TextField} from "@mui/material";
import {useState} from "react";
import {Box} from "@material-ui/core";

function Usuario() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [contato, setContato] = useState("");
    const [senha, setSenha] = useState("");


    return (
        <div>
            <Card className= "card">
                <form
                    className="form"
                    onSubmit={event => {
                        console.log(nome)
                        console.log(cpf)
                        console.log(nascimento)
                        console.log(email)
                        console.log(contato)
                        console.log(senha)
                        event.preventDefault()
                    }}
                >
                    <h2>Login</h2>
                    <Box className="formComponent">
                        <TextField
                            value={nome}
                            onChange={event => {
                                setNome(event.target.value)
                            }}
                            name="nome"
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            required
                            margin={"normal"}

                        />
                        <TextField
                            value={cpf}
                            onChange={event => {
                                setCpf(event.target.value)
                            }}
                            name="cpf"
                            id="cpf"
                            label="Cpf"
                            type={"number"}
                            variant="outlined"
                            required
                            margin={"normal"}
                        />
                        <TextField
                            value={nascimento}
                            onChange={event => {
                                setNascimento(event.target.value)
                            }}
                            name="nascimento"
                            id="nascimento"
                            label="Data de Nascimento"
                            type={"date"}
                            variant="outlined"
                            required
                            margin={"normal"}
                        />
                        <TextField
                            value={email}
                            onChange={event => {
                                setEmail(event.target.value)
                            }}
                            name="email"
                            id="email"
                            label="Email"
                            variant="outlined"
                            required
                            margin={"normal"}
                        />
                        <TextField
                            value={contato}
                            onChange={event => {
                                setContato(event.target.value)
                            }}
                            name="contato"
                            id="contato"
                            label="Contato"
                            type={"number"}
                            variant="outlined"
                            required
                            margin={"normal"}
                        />
                        <TextField
                            value={senha}
                            onChange={event => {
                                setSenha(event.target.value)
                            }}
                            name="senha"
                            id="Senha"
                            type="password"
                            label="Senha"
                            variant="outlined"
                            required
                            margin={"normal"}
                        />
                        <Button
                            variant="contained"
                            type={"submit"}
                            onClick={onsubmit}
                            margin={"normal"}
                        >Salvar</Button>
                    </Box>
                </form>
            </Card>
        </div>
    );
}

export default Usuario;