import {useContext, useState} from "react";

import {Button, TextField,} from "@mui/material";

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";
import axios from "../../../axios";

import DataContext from "../../../data/DataContext";

const CadastrarUsuario = (props) => {

    const { state, setState } = useContext(DataContext)

    const [formData, setFormData] = useState({
        id_usuario: '',
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

    function onSubmit(e) {
        setFormData({
            ...formData, id_usuario: state.id
        });
        request(formData)
        e.preventDefault()
    }

    const request = async (formSate) => {
        return axios.post('/address/register', formData)
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
                    <Grid21>
                        <TextField
                            value={formData.descricao}
                            onChange={e => handleChange(e)}
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
                            value={formData.logradouro}
                            onChange={e => handleChange(e)}
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
                            value={formData.numero}
                            onChange={e => handleChange(e)}
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
                            value={formData.complemento}
                            onChange={e => handleChange(e)}
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
                            value={formData.bairro}
                            onChange={e => handleChange(e)}
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
                            value={formData.cidade}
                            onChange={e => handleChange(e)}
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
                            value={formData.estado}
                            onChange={e => handleChange(e)}
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
                            value={formData.cep}
                            onChange={e => handleChange(e)}
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