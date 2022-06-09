import {useState} from "react";

import {Button, InputAdornment, MenuItem, TextField,} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {Buttons, Form, FormComponents, Grid2, Grid21, TitleModal} from "./styles";
import axios from "../../../axios";

const CadastrarCaixa = (props) => {

    const [formData, setFormData] = useState({
        id_encomenda : '',
        altura : '',
        largura : '',
        comprimento : '',
        peso : '',
        tipo_encomenda : '',
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
                <TitleModal>Cadastrar Caixa</TitleModal>
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
                    <TextField
                        value={formData.tipo_encomenda}
                        onChange={e => handleChange(e)}
                        name="tipo_encomenda"
                        label="Tipo encomenda"
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

export default CadastrarCaixa;