import {useState} from "react";

import {
    Button, 
    TextField,
    InputAdornment,
} from "@mui/material";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { 
    Grid2,
    Grid3,
    Grid3_1,
    Form,
    FormComponents,
    Buttons,
    TitleModal
} from "./styles";

const Usuario = (props) => {

    const [formData, setFormData] = useState(props.state);

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
                <TitleModal>{ props.titulo }</TitleModal>
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
                    <Grid3_1>
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
                    </Grid3_1>
                    <Grid2>
                        <TextField
                            value={formData.nascimento}
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
                                endAdornment: <InputAdornment position="end"><CalendarTodayIcon /></InputAdornment>,
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
                    <Grid2>
                        <TextField
                            value={formData.senha}
                            onChange={e => handleChange(e)}
                            id="senha"
                            type="password"
                            label="Senha"
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
                    >{ props.botao }</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default Usuario;