import {useState} from "react";

import {Button, InputAdornment, MenuItem, TextField,} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";
import axios from "../../../axios";

const CadastrarVeiculo = (props) => {

    const [formData, setFormData] = useState({
        id_tipo_veiculo: '',
        descricao: '',
        valor_minimo: '',
        valor_km_percorrido: '',
        valor_km_deslocamento: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    function onSubmit(e, formSate) {
        console.log(formSate)
        request(formSate)
        e.preventDefault()
    }

    const request = async (formSate) => {
        return axios.post('/delivery_type/register', formSate)
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
                onSubmit={(e) => onSubmit(e, formData)}
            >
                <TitleModal>Cadastrar Veiculo</TitleModal>
                <FormComponents>
                    <TextField
                        value={formData.id_tipo_veiculo}
                        onChange={e => handleChange(e)}
                        name="id_tipo_veiculo"
                        label="Tipo Veículo"
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
                        value={formData.valor_minimo}
                        onChange={e => handleChange(e)}
                        name="valor_minimo"
                        label="Valor mínimo"
                        margin={"normal"}
                        fullWidth
                        type={"number"}
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
                        value={formData.valor_km_percorrido}
                        onChange={e => handleChange(e)}
                        name="valor_km_percorrido"
                        label="Valor por Km percorrido"
                        margin={"normal"}
                        fullWidth
                        type={"number"}
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
                        value={formData.valor_km_deslocamento}
                        onChange={e => handleChange(e)}
                        name="valor_km_deslocamento"
                        label="Valor por Km deslocamento"
                        margin={"normal"}
                        fullWidth
                        type={"number"}
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