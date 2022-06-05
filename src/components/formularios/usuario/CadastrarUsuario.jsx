import {useState} from "react";

import {Button, InputAdornment, MenuItem, TextField,} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";

const CadastrarUsuario = (props) => {

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        sexo: '',
        data_nascimento: '',
        email: '',
        contato: '',
        senha: '',
        confirmarSenha: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    return (
        <>
            <Form
                onSubmit={(e) => props.onSubmit(e, formData)}
            >
                <TitleModal>Cadastrar Usuário</TitleModal>
                <FormComponents>
                    <TextField
                        value={formData.nome}
                        onChange={e => handleChange(e)}
                        name="nome"
                        label="Nome"
                        margin={"normal"}
                        fullWidth
                        InputLabelProps={{ 
                            shrink: true,
                            style: {
                                fontSize: "1.5rem"
                            }
                        }}
                        InputProps={{
                            style: {fontSize: '1.3rem'},
                        }}
                    />
                    <Grid21>
                        <TextField
                            value={formData.email}
                            onChange={e => handleChange(e)}
                            name="email"
                            label="Email"
                            margin={"normal"}
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true,
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }}
                            InputProps={{
                                style: {fontSize: '1.3rem'},
                            }}
                        />
                        <TextField
                            value={formData.cpf}
                            onChange={e => handleChange(e)}
                            name="cpf"
                            label="Cpf"
                            type={"number"}
                            margin={"normal"}
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true,
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }}
                            InputProps={{
                                style: {fontSize: '1.3rem'},
                            }}
                        />
                    </Grid21>
                    <Grid2>
                        <TextField
                            value={formData.data_nascimento}
                            onChange={e => handleChange(e)}
                            name="data_nascimento"
                            label="Data de Nascimento"
                            type={"date"}
                            margin={"normal"}
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true,
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }}
                            InputProps={{
                                style: {fontSize: '1.3rem'},
                                endAdornment: <InputAdornment position="end"><CalendarTodayIcon /></InputAdornment>,
                            }}
                        />
                        <TextField
                            value={formData.contato}
                            onChange={e => handleChange(e)}
                            name="contato"
                            label="Contato"
                            type={"number"}
                            margin={"normal"}
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true,
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }}
                            InputProps={{
                                style: {fontSize: '1.3rem'},
                            }}
                        />
                        <TextField
                            value={formData.sexo}
                            onChange={e => handleChange(e)}
                            name={"sexo"}
                            label="Sexo"
                            margin={"normal"}
                            select
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }}
                            InputProps={{
                                style: {fontSize: '1.3rem'},
                            }}
                        >
                            <MenuItem key={"M"} value={"M"} id={"M"}>Masculino</MenuItem>
                            <MenuItem key={"F"} value={"F"} id={"F"}>Feminino</MenuItem>
                        </TextField>
                    </Grid2>
                    <Grid2>
                        <TextField
                            value={formData.senha}
                            onChange={e => handleChange(e)}
                            name="senha"
                            type="password"
                            label="Senha"
                            margin={"normal"}
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true,
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }}
                            InputProps={{
                                style: {fontSize: '1.3rem'},
                            }}
                        />
                        <TextField
                            value={formData.confirmarSenha}
                            onChange={e => handleChange(e)}
                            name="confirmarSenha"
                            type="password"
                            label="Confirmar Senha"
                            margin={"normal"}
                            fullWidth
                            InputLabelProps={{ 
                                shrink: true,
                                style: {
                                    fontSize: "1.5rem"
                                }
                            }}
                            InputProps={{
                                style: {fontSize: '1.3rem'},
                            }}
                        />
                    </Grid2>
                </FormComponents>
                <Buttons>
                    <Button
                        variant="contained"
                        type={"submit"}
                        onClick={() => props.close()}
                        margin={"normal"}
                        style={{backgroundColor: "red"}}
                    >Cancelar</Button>
                    <Button
                        variant="contained"
                        type={"submit"}
                        onClick={onsubmit}
                        margin={"normal"}
                    >Cadastrar</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default CadastrarUsuario;