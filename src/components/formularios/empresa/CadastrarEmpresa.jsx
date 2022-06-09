import {useState} from "react";

import {Button, InputAdornment, MenuItem, TextField,} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";
import axios from "../../../axios";

const CadastrarUsuario = (props) => {

    const [formData, setFormData] = useState({
        id_usuario: '',
        nome: '',
        cnpj: '',
        email: '',
        contato: '',
        ramo_empresarial: '',
    })

    const [formAddress, setFormAddress] = useState({
        descricao: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    function handleChangeAddress(e) {
        const { name, value } = e.target;
        setFormAddress({
            ...formAddress, [name]: value
        });
    }

    function onSubmit(e) {
        console.log(formData)
        console.log({...formAddress, id_usuario : formData.id_usuario})
        requestCompany()
        requestAddress()
        e.preventDefault()
    }

    const requestCompany = async () => {
        return axios.post('/company/register', formData)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
            })
    }

    const requestAddress = async () => {
        return axios.post('/address/register', {...formAddress, id_usuario : formData.id_usuario})
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
            })
    }

    return (
        <>
            <Form
                onSubmit={(e) => onSubmit(e)}
            >
                <TitleModal>Cadastrar Endereco</TitleModal>
                <FormComponents>
                    <TextField
                        value={formData.id_usuario}
                        onChange={e => handleChange(e)}
                        name="id_usuario"
                        label="Usuario"
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
                    <Grid2>
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
                        <TextField
                            value={formData.cnpj}
                            onChange={e => handleChange(e)}
                            name="cnpj"
                            label="CNPJ"
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
                    </Grid2>
                    <Grid2>
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
                    </Grid2>
                    <Grid2>
                        <TextField
                            value={formData.ramo_empresarial}
                            onChange={e => handleChange(e)}
                            name="ramo_empresarial"
                            label="Ramo Empresarial"
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
                    <Grid21>
                        <TextField
                            value={formAddress.descricao}
                            onChange={e => handleChangeAddress(e)}
                            name="descricao"
                            label="Descrição"
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
                            value={formAddress.logradouro}
                            onChange={e => handleChangeAddress(e)}
                            name="logradouro"
                            label="Logradouro"
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
                            value={formAddress.numero}
                            onChange={e => handleChangeAddress(e)}
                            name="numero"
                            label="numero"
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
                            value={formAddress.complemento}
                            onChange={e => handleChangeAddress(e)}
                            name="complemento"
                            label="Complemento"
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
                    <Grid2>
                        <TextField
                            value={formAddress.bairro}
                            onChange={e => handleChangeAddress(e)}
                            name="bairro"
                            label="Bairro"
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
                            value={formAddress.cidade}
                            onChange={e => handleChangeAddress(e)}
                            name="cidade"
                            label="Cidade"
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
                    <Grid2>
                        <TextField
                            value={formAddress.estado}
                            onChange={e => handleChangeAddress(e)}
                            name="estado"
                            label="Estado"
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
                            value={formAddress.cep}
                            onChange={e => handleChangeAddress(e)}
                            name="cep"
                            label="Cep"
                            type="number"
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