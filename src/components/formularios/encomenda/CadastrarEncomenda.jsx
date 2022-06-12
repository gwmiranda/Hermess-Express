import {useState} from "react";

import {Button, TextField,} from "@mui/material";

import {Buttons, Form, FormComponents, Grid2, Grid3, TitleModal} from "./styles";
import axios from "../../../axios";

const CadastrarEncomenda = (props) => {

    const [stateEnvio, setStateEnvio] = useState({})
    const [formData, setFormData] = useState({
        data_agendada : '',
        hora_agendada : '',
        logradouro_entrega : '',
        numero_entrega : '',
        complemento_entrega : '',
        bairro_entrega : '',
        cidade_entrega : '',
        estado_entrega : '',
        cep_entrega : '',
        logradouro_coleta : '',
        numero_coleta : '',
        complemento_coleta : '',
        bairro_coleta : '',
        cidade_coleta : '',
        estado_coleta : '',
        cep_coleta : '',
        altura : '',
        largura : '',
        comprimento : '',
        peso : '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    }

    function onSubmit(e) {
        console.log(formData)
        request()
        e.preventDefault()
    }


    const request = async () => {
        return axios.get('/simulator/delivery', {
            params :
                {
                    origem: formData.logradouro_coleta+","+formData.numero_coleta+","+formData.bairro_coleta+","+formData.cidade_coleta+","+formData.cep_coleta,
                    destino: formData.logradouro_entrega+","+formData.numero_entrega+","+formData.bairro_entrega+","+formData.cidade_entrega+","+formData.cep_entrega,
                    data_agendada: formData.data_agendada,
                    hora_agendada: formData.hora_agendada,
                    peso: formData.peso,
                    altura: formData.altura,
                    largura: formData.largura,
                    comprimento: formData.comprimento,
            }})
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
            })
    }

    const requestCaixa = async () => {
        return axios.post('/box/register', formData)
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
                <FormComponents>
                    <Grid2>
                        <TextField
                            value={formData.data_agendada}
                            onChange={e => handleChange(e)}
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
                            value={formData.hora_agendada}
                            onChange={e => handleChange(e)}
                            name="hora_agendada"
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
                    </Grid2>
                    <Grid2>
                        <TextField
                            value={formData.logradouro_entrega}
                            onChange={e => handleChange(e)}
                            name="logradouro_entrega"
                            label="Logradouro Entrega"
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
                            value={formData.numero_entrega}
                            onChange={e => handleChange(e)}
                            name="numero_entrega"
                            label="Numero Entrega"
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
                    </Grid2>
                    <Grid2>
                        <TextField
                            value={formData.complemento_entrega}
                            onChange={e => handleChange(e)}
                            name="complemento_entrega"
                            label="Complemento Entrega"
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
                            value={formData.bairro_entrega}
                            onChange={e => handleChange(e)}
                            name="bairro_entrega"
                            label="Bairro Entrega"
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
                    <Grid3>
                        <TextField
                            value={formData.cidade_entrega}
                            onChange={e => handleChange(e)}
                            name="cidade_entrega"
                            label="Cidade Entrega"
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
                            value={formData.estado_entrega}
                            onChange={e => handleChange(e)}
                            name="estado_entrega"
                            label="Estado Entrega"
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
                            value={formData.cep_entrega}
                            onChange={e => handleChange(e)}
                            name="cep_entrega"
                            label="Cep Entrega"
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
                    </Grid3>
                    <Grid2>
                        <TextField
                            value={formData.logradouro_coleta}
                            onChange={e => handleChange(e)}
                            name="logradouro_coleta"
                            label="Logradouro Coleta"
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
                            value={formData.numero_coleta}
                            onChange={e => handleChange(e)}
                            name="numero_coleta"
                            label="Numero Coleta"
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
                    </Grid2>
                    <Grid2>
                        <TextField
                            value={formData.complemento_coleta}
                            onChange={e => handleChange(e)}
                            name="complemento_coleta"
                            label="Complemento Coleta"
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
                            value={formData.bairro_coleta}
                            onChange={e => handleChange(e)}
                            name="bairro_coleta"
                            label="Bairro Coleta"
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
                    <Grid3>
                        <TextField
                            value={formData.cidade_coleta}
                            onChange={e => handleChange(e)}
                            name="cidade_coleta"
                            label="Cidade Coleta"
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
                            value={formData.estado_coleta}
                            onChange={e => handleChange(e)}
                            name="estado_coleta"
                            label="Estado Coleta"
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
                            value={formData.cep_coleta}
                            onChange={e => handleChange(e)}
                            name="cep_coleta"
                            label="Cep Coleta"
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
                    </Grid3>
                    <Grid2>
                        <TextField
                            value={formData.altura}
                            onChange={e => handleChange(e)}
                            name="altura"
                            label="Altura"
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
                            value={formData.largura}
                            onChange={e => handleChange(e)}
                            name="largura"
                            label="Largura"
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
                    </Grid2>
                    <Grid2>
                        <TextField
                            value={formData.comprimento}
                            onChange={e => handleChange(e)}
                            name="comprimento"
                            label="Comprimento"
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
                            value={formData.peso}
                            onChange={e => handleChange(e)}
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

export default CadastrarEncomenda;