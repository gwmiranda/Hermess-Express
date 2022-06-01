import {useState} from "react";

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

const EditarSenhaUsuario = (props) => {

    const [formData, setFormData] = useState({
        senha: '',
        novaSenha: '',
        confirmarSenha: '',
    });

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData({
            ...formData, [id]: value
        });
    }

    return (
        <>
            <Form
                onSubmit={(e) => props.onSubmit(e, formData)}
            >
                <TitleModal>Editar Senha Usuário</TitleModal>
                <FormComponents>
                    <Grid3>
                        <TextField
                            value={formData.senha}
                            onChange={e => handleChange(e)}
                            id="senha"
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
                            value={formData.novaSenha}
                            onChange={e => handleChange(e)}
                            id="novaSenha"
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
                            value={formData.confirmarSenha}
                            onChange={e => handleChange(e)}
                            id="confirmarSenha"
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