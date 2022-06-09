import {useState} from "react";

import {Button, TextField,} from "@mui/material";

import {Buttons, Form, FormComponents, Grid2, Grid3, TitleModal} from "./styles";
import axios from "../../../axios";

const CadastrarEncomenda = (props) => {

    const [formData, setFormData] = useState({
        id_usuario : '',
        id_tipo_entrega : '',
        data_agendada : '',
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
        valor_entrega : '',
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
        return axios.post('/package/register', formData)
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
                <TitleModal>Cadastrar encomenda</TitleModal>
                <FormComponents>
                    <Grid3>
                        <TextField
                            value={formData.id_usuario}
                            onChange={e => handleChange(e)}
                            name="id_usuario"
                            label="Id usuario"
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
                            value={formData.id_tipo_entrega}
                            onChange={e => handleChange(e)}
                            name="id_tipo_entrega"
                            label="Tipo entrega"
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
                            value={formData.data_agendada}
                            onChange={e => handleChange(e)}
                            name="data_agendada"
                            label="Data Agendada"
                            margin={"normal"}
                            type={"datetime-local"}
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
                    <TextField
                        value={formData.valor_entrega}
                        onChange={e => handleChange(e)}
                        name="valor_entrega"
                        label="Valor Entrega"
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

export default CadastrarEncomenda;