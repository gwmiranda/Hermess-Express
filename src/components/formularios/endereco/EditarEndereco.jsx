import {useContext, useState} from "react";

import {Button, TextField,} from "@mui/material";

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";
import axios from "../../../axios";

import DataContext from "../../../data/DataContext";

const EditarUsuario = (props) => {

    const [formData, setFormData] = useState({
        id: props.state.id,
        id_usuario: props.state.id_usuario,
        descricao: props.state.descricao,
        logradouro: props.state.logradouro,
        numero: props.state.numero,
        complemento: props.state.complemento,
        bairro: props.state.bairro,
        cidade: props.state.cidade,
        estado: props.state.estado,
        cep: props.state.cep,
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    function onSubmit(e) {
        props.onSubmit(formData)
        e.preventDefault()
    }



    return (
        <>
            <Form
                onSubmit={(e) => onSubmit(e)}
            >
                <TitleModal>Editar Endereco</TitleModal>
                <FormComponents>
                    <Grid21>
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
                    </Grid21>
                    <Grid2>
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

export default EditarUsuario;