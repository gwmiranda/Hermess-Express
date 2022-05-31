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

function Usuario() {

    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        nascimento: "",
        email: "",
        contato: "",
        senha: "",
        confirmarSenha: "",
    });

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }

    return (
        <>
            <form
                className="form"
                onSubmit={e => {
                    console.log(formData)
                    e.preventDefault();
                }}
            >
                <h2>Login</h2>
                <TextField
                    value={formData.nome}
                    onChange={e => handleChange(e)}
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
                <Grid3_1>
                    <TextField
                        value={formData.email}
                        onChange={e => handleChange(e)}
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
                    <TextField
                        value={formData.cpf}
                        onChange={e => handleChange(e)}
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
                <Grid2>
                    <TextField
                        value={formData.nascimento}
                        onChange={e => handleChange(e)}
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
                        value={formData.contato}
                        onChange={e => handleChange(e)}
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
                        value={formData.senha}
                        onChange={e => handleChange(e)}
                        id="senha"
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
                        value={formData.confirmarSenha}
                        onChange={e => handleChange(e)}
                        id="confirmarSenha"
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