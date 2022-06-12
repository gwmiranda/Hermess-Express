import {useState} from "react";

import {Button, TextField,} from "@mui/material";

import {Buttons, Form, FormComponents} from "./styles";
import axios from "../../../axios";

const SimulacaoForm = (props) => {

    const [formData, setFormData] = useState({
        origem: '',
        destino: '',
        data_agendada: '',
        horario_agendado: '',
        peso: '',
        altura: '',
        largura: '',
        comprimento: '',
    });

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData({
            ...formData, [id]: value
        });
    }

    function onSubmit(e) {
        console.log(formData)
        // request(formData)
        e.preventDefault()
    }

    const request = async () => {
        return axios.get('/simulator/confirm', formData)
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
                <FormComponents>
                    <TextField
                        value={formData.origem}
                        onChange={e => handleChange(e)}
                        id="origem"
                        label="Origem"
                        margin={"normal"}
                        fullWidth
                        required
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
                        value={formData.destino}
                        onChange={e => handleChange(e)}
                        id="destino"
                        label="Destino"
                        margin={"normal"}
                        fullWidth
                        required
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
                        value={formData.data_agendada}
                        onChange={e => handleChange(e)}
                        id="data_agendada"
                        name="data_agendada"
                        label="Data Agendada"
                        margin={"normal"}
                        type={"date"}
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
                        value={formData.horario_agendado}
                        onChange={e => handleChange(e)}
                        id="horario_agendado"
                        name="horario_agendado"
                        label="Hora Agendada"
                        margin={"normal"}
                        type={"time"}
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
                        value={formData.peso}
                        onChange={e => handleChange(e)}
                        id="peso"
                        name="peso"
                        label="Peso"
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
                        id="altura"
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
                        value={formData.largura}
                        onChange={e => handleChange(e)}
                        id="largura"
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
                        value={formData.comprimento}
                        onChange={e => handleChange(e)}
                        id="comprimento"
                        name="comprimento"
                        label="Comprimento"
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
                        onClick={onsubmit}
                        margin={"normal"}
                    >Simular</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default SimulacaoForm;