import {useState} from "react";

import {
    Button, 
    FormControl,
    TextField
} from "@mui/material";
import {Box} from "@material-ui/core";

import { 
    Grid2,
    Grid3,
    Grid3_1,
  } from "./styles";
import { fontSize } from "@mui/system";

function Usuario() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [contato, setContato] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");


    return (
        <>
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
                <Grid3_1>
                    <TextField
                        value={nome}
                        onChange={event => {
                            setNome(event.target.value)
                        }}
                        id="nome"
                        label="Nome"
                        margin={"normal"}
                        fullWidth
                        InputLabelProps={{ 
                            shrink: true,
                            style: {
                                fontSize: "1.4rem"
                            }
                        }}
                        InputProps={{
                            style: {fontSize: '1.3rem'},
                        }}
                        required
                    />
                    <TextField
                        value={cpf}
                        onChange={event => {
                            setCpf(event.target.value)
                        }}
                        id="cpf"
                        label="Cpf"
                        type={"number"}
                        margin={"normal"}
                        fullWidth
                        InputLabelProps={{ 
                            shrink: true,
                            style: {
                                fontSize: "1.4rem"
                            }
                        }}
                        InputProps={{
                            style: {fontSize: '1.3rem'},
                        }}
                        required
                    />
                </Grid3_1>
                <TextField
                    value={email}
                    onChange={event => {
                        setEmail(event.target.value)
                    }}
                    id="email"
                    label="Email"
                    margin={"normal"}
                    fullWidth
                    InputLabelProps={{ 
                        shrink: true,
                        style: {
                            fontSize: "1.4rem"
                        }
                    }}
                    InputProps={{
                        style: {fontSize: '1.3rem'},
                    }}
                    required
                />
                <Grid2>
                    <TextField
                        value={nascimento}
                        onChange={event => {
                            setNascimento(event.target.value)
                        }}
                        id="nascimento"
                        label="Data de Nascimento"
                        type={"date"}
                        margin={"normal"}
                        fullWidth
                        InputLabelProps={{ 
                            shrink: true,
                            style: {
                                fontSize: "1.4rem"
                            }
                        }}
                        InputProps={{
                            style: {fontSize: '1.3rem'},
                        }}
                        required
                    />
                    <TextField
                        value={contato}
                        onChange={event => {
                            setContato(event.target.value)
                        }}
                        id="contato"
                        label="Contato"
                        type={"number"}
                        margin={"normal"}
                        fullWidth
                        InputLabelProps={{ 
                            shrink: true,
                            style: {
                                fontSize: "1.4rem"
                            }
                        }}
                        InputProps={{
                            style: {fontSize: '1.3rem'},
                        }}
                        required
                    />
                </Grid2>
                <Grid2>
                    <TextField
                        value={senha}
                        onChange={event => {
                            setSenha(event.target.value)
                        }}
                        id="Senha"
                        type="password"
                        label="Senha"
                        margin={"normal"}
                        fullWidth
                        InputLabelProps={{ 
                            shrink: true,
                            style: {
                                fontSize: "1.4rem"
                            }
                        }}
                        InputProps={{
                            style: {fontSize: '1.3rem'},
                        }}
                        required
                    />
                    <TextField
                        value={confirmarSenha}
                        onChange={event => {
                            setSenha(event.target.value)
                        }}
                        id="ConfirmarSenha"
                        type="password"
                        label="Confirmar Senha"
                        margin={"normal"}
                        fullWidth
                        InputLabelProps={{ 
                            shrink: true,
                            style: {
                                fontSize: "1.4rem"
                            }
                        }}
                        InputProps={{
                            style: {fontSize: '1.3rem'},
                        }}
                        required
                    />
                </Grid2>
                    <Button
                        variant="contained"
                        type={"submit"}
                        onClick={onsubmit}
                        margin={"normal"}
                    >
                        Salvar
                    </Button>
            </form>
        </>
    );
}

export default Usuario;