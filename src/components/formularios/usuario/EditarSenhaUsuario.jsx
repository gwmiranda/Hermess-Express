import {useContext, useState} from "react";

import {
    Button, 
    TextField,
} from "@mui/material";

import { 
    Grid3,
    Form,
    FormComponents,
    Buttons,
    TitleModal
} from "./styles";
import axios from "../../../axios";
import DataContext from "../../../data/DataContext";

const EditarSenhaUsuario = (props) => {

    const {state, setState} = useContext(DataContext)
    const [formData, setFormData] = useState({
        email: state.email,
        senha_atual: '',
        senha: '',
        confirmar_senha: '',
    });

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
        return axios.put(`/user/updatePassword/${state.id}`, {...formData, password : formData.senha_atual})
            .then((res) => {
                setState({...state, password: res.data.data.usuario.password})
                props.close()
                alert("Senha editada")
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
                <TitleModal>Editar Senha Usuário</TitleModal>
                <FormComponents>
                    <Grid3>
                        <TextField
                            value={formData.senha_atual}
                            onChange={e => handleChange(e)}
                            id="senha_atual"
                            type="password"
                            label="Senha Atual"
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
                            value={formData.senha}
                            onChange={e => handleChange(e)}
                            id="senha"
                            type="password"
                            label="Nova Senha"
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
                            value={formData.confirmar_senha}
                            onChange={e => handleChange(e)}
                            id="confirmar_senha"
                            type="password"
                            label="Confirmar Senha"
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

export default EditarSenhaUsuario;