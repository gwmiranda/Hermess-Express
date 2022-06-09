import {useState} from "react";

import {Button, InputAdornment, MenuItem, TextField,} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";
import axios from "../../../axios";

const CadastrarEntregaColeta = (props) => {

    const [formData, setFormData] = useState({
        id_encomenda : '',
        id_veiculo_coleta : '',
        id_veiculo_entrega : '',
        horario_saida : '',
        horario_coleta : '',
        horario_entrega : '',
        horario_retorno : '',
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
        return axios.post('/pick_delivery/register', formData)
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
                <TitleModal>Cadastrar Entrega Coleta</TitleModal>
                <FormComponents>
                    <TextField
                        value={formData.id_encomenda}
                        onChange={e => handleChange(e)}
                        name="id_encomenda"
                        label="Id encomenda"
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
                        value={formData.id_veiculo_coleta}
                        onChange={e => handleChange(e)}
                        name="id_veiculo_coleta"
                        label="Veiculo coleta"
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
                        value={formData.id_veiculo_entrega}
                        onChange={e => handleChange(e)}
                        name="id_veiculo_entrega"
                        label="Veiculo entrega"
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
                        value={formData.horario_saida}
                        onChange={e => handleChange(e)}
                        name="horario_saida"
                        label="Horario Saida"
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
                    <TextField
                        value={formData.horario_coleta}
                        onChange={e => handleChange(e)}
                        name="horario_coleta"
                        label="Horario Coleta"
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
                    <TextField
                        value={formData.horario_entrega}
                        onChange={e => handleChange(e)}
                        name="horario_entrega"
                        label="Horario Entrega"
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
                    <TextField
                        value={formData.horario_retorno}
                        onChange={e => handleChange(e)}
                        name="horario_retorno"
                        label="Horario Retorno"
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

export default CadastrarEntregaColeta;