import {useState} from "react";

import {Button, TextField,} from "@mui/material";

import {Buttons, Form, FormComponents, TitleModal} from "./styles";

const Login = (props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
                <TitleModal>Login</TitleModal>
                <FormComponents>
                    <TextField
                        value={formData.email}
                        onChange={e => handleChange(e)}
                        id="email"
                        label="Email"
                        margin={"normal"}
                        fullWidth
                        type={"email"}
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
                            value={formData.password}
                            onChange={e => handleChange(e)}
                            id="password"
                            label="Senha"
                            margin={"normal"}
                            fullWidth
                            type={"password"}
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
                    >Logar</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default Login;