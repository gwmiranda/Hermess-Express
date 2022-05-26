import {Button, TextField} from '@mui/material';
import './MinhaConta.css';
import {useState} from "react";
import axios from "../../axios";

function MinhaConta() {

    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [contato, setContato] = useState("");
    const [token, setToken] = useState("");

    // TODO - COrrigir caminho da request
    async function updateUsuarioRequest() {
        axios.post('update/{????}',{
            email : email,
            cpf : cpf,
            nascimento : nascimento,
            usuario : usuario,
            senha : senha,
            contato : contato


        }).then((res) => {
            console.log(res.data)

        }).catch((error) => {
            console.log(error.response)
            alert(error)
        })
    }

    return (
        <>
            <h2 classname="titulo">Minha Conta</h2>
            <b className='bold'>Meus Dados</b>
            <form
                onSubmit={event => {
                    console.log(email)
                    console.log(cpf)
                    console.log(nascimento)
                    console.log(usuario)
                    console.log(senha)
                    console.log(contato)
                    updateUsuarioRequest()
                    event.preventDefault()
                }}
            >
                <div className='container'>
                    <TextField
                        value={email}
                        onChange={event => {
                            setEmail(event.target.value)
                        }}
                        name="email"
                        id="email"
                        label="Email"
                        variant="outlined"
                        required
                        margin={"normal"}
                    />
                </div>
                <div className='container'>
                    <TextField
                        value={cpf}
                        onChange={event => {
                            setCpf(event.target.value)
                        }}
                        name="cpf"
                        id="cpf"
                        label="CPF"
                        variant="outlined"
                        required
                        type={"number"}
                        margin={"normal"}
                    />
                </div>
                <div className='container'>
                    <TextField
                        value={nascimento}
                        onChange={event => {
                            setNascimento(event.target.value)
                        }}
                        id="nascimento"
                        label="Data de Nascimento"
                        name="nascimento"
                        type={"date"}
                        margin="normal"
                        required
                        InputLabelProps={{shrink: true}}
                    />
                </div>
                 <div className='container'>
                     <TextField
                         value={usuario}
                         onChange={event => {
                             setUsuario(event.target.value)
                         }}
                         name="usuario"
                         id="usuario"
                         label="usuario"
                         variant="outlined"
                         required
                         margin={"normal"}
                     />
                </div>
                <div className='container'>
                    <TextField
                        value={senha}
                        onChange={event => {
                            setSenha(event.target.value)
                        }}
                        name="senha"
                        id="senha"
                        type="password"
                        label="Senha"
                        variant="outlined"
                        required
                        margin={"normal"}
                    />
                </div>
                <div className='container'>
                    <TextField
                        value={contato}
                        onChange={event => {
                            setContato(event.target.value)
                        }}
                        name="contato"
                        id="contato"
                        label="Contato"
                        variant="outlined"
                        required
                        type={"number"}
                        margin={"normal"}
                    />
                </div>
                <div>
                    <Button
                        type={"submit"}
                        variant="contained"
                        margin={"normal"}
                        onClick={onsubmit}
                    >Salvar</Button>
                </div>
            </form>
        </>
    );
}

export default MinhaConta;