import {useState} from "react";

import {Button, InputAdornment, MenuItem, TextField,} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";
import axios from "../../../axios";

const CadastrarVeiculo = (props) => {

    const [formData, setFormData] = useState({
        id_tipo_veiculo: '',
        id_empresa: '',
        descricao: '',
        placa: '',
        carga_maxima: '',
        comprimento: '',
        largura: '',
        altura: '',
        valor_mensal: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    function onSubmit(e) {
        console.log(formData)
        request(formData)
        e.preventDefault()
    }

    const request = async () => {
        return axios.post('/vehicle/register', formData)
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
                <TitleModal>Cadastrar Veiculo</TitleModal>
                <FormComponents>
                    <TextField
                        value={formData.id_tipo_veiculo}
                        onChange={e => handleChange(e)}
                        name="id_tipo_veiculo"
                        label="Id tipo veiculo"
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
                        value={formData.id_empresa}
                        onChange={e => handleChange(e)}
                        name="id_empresa"
                        label="Empresa"
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
                        value={formData.descricao}
                        onChange={e => handleChange(e)}
                        name="descricao"
                        label="Descricao"
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
                        value={formData.placa}
                        onChange={e => handleChange(e)}
                        name="placa"
                        label="Placa"
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
                        value={formData.carga_maxima}
                        onChange={e => handleChange(e)}
                        name="carga_maxima"
                        label="Carga Maxima"
                        margin={"normal"}
                        type={"number"}
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
                        value={formData.comprimento}
                        onChange={e => handleChange(e)}
                        name="comprimento"
                        label="comprimento"
                        margin={"normal"}
                        type={"number"}
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
                        value={formData.largura}
                        onChange={e => handleChange(e)}
                        name="largura"
                        label="Largura"
                        margin={"normal"}
                        type={"number"}
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
                        value={formData.altura}
                        onChange={e => handleChange(e)}
                        name="altura"
                        label="Altura"
                        margin={"normal"}
                        type={"number"}
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
                        value={formData.valor_mensal}
                        onChange={e => handleChange(e)}
                        name="valor_mensal"
                        label="Valor Mensal"
                        margin={"normal"}
                        type={"number"}
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

export default CadastrarVeiculo;