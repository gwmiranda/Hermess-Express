import {useContext, useState} from "react";

import {
    Button, 
    TextField,
    InputAdornment,
} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { 
    Grid2,
    Grid21,
    Form,
    FormComponents,
    Buttons,
    TitleModal
} from "./styles";
import axios from "../../../axios";
import DataContext from "../../../data/DataContext";

const EditarUsuario = (props) => {

    const {state, setState} = useContext(DataContext)
    const [formData, setFormData] = useState(props.state);

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData({
            ...formData, [id]: value
        });
    }

    function onSubmit(e) {
        request(formData)
        e.preventDefault()
    }

    const request = async () => {
        return axios.put(`/user/update/${formData.id}`, formData)
            .then((res) => {
                alterarState(res.data.data.usuario)
            })
            .catch((error) => {
                console.log(error.response);
                alert(error);
            })
    }

    function alterarState(res) {
        setState({
            id: res.id,
            nome: res.nome,
            password: res.password,
            contato: res.contato,
            cpf: res.cpf,
            data_nascimento: res.data_nascimento,
            email: res.email,
            sexo: res.sexo,
            id_permissao: res.id_permissao,
        })
    }

    return (
        <>
            <Form
                onSubmit={(e) => onSubmit(e)}
            >
                <TitleModal>Editar Usuário</TitleModal>
                <FormComponents>
                    <TextField
                        value={formData.nome}
                        onChange={e => handleChange(e)}
                        id="nome"
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
                    <Grid21>
                        <TextField
                            value={formData.email}
                            onChange={e => handleChange(e)}
                            id="email"
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
                            value={formData.cpf}
                            onChange={e => handleChange(e)}
                            id="cpf"
                            label="Cpf"
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
                            value={formData.data_nascimento}
                            onChange={e => handleChange(e)}
                            id="nascimento"
                            label="Data de Nascimento"
                            type={"date"}
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
                            id="contato"
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
                    >Editar</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default EditarUsuario;