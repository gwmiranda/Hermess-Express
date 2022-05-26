import './CadastroUsuario.css';
import {Button, Card, MenuItem, TextField} from "@mui/material";
import {useState} from "react";
import axios from "../../axios";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [sexo, setSexo] = useState('M');
  const [senha, setSenha] = useState("");
  const [contato, setContato] = useState("");

  async function cadastroUsuarioRequest() {
    axios.post('register',{
      nome: nome,
      cpf : cpf,
      sexo : sexo,
      nascimento : nascimento,
      email : email,
      contato : contato,
      senha : senha


    }).then((res) => {
      console.log(res.data)

    }).catch((error) => {
      console.log(error.response)
      alert(error)
    })
  }

  return (
    <>
      <h2 classname="titulo">Cadastro</h2>
      <Card>
        <form
          onSubmit={event => {
            console.log(email)
            console.log(cpf)
            console.log(nascimento)
            console.log(sexo)
            console.log(senha)
            console.log(contato)
            cadastroUsuarioRequest()
            event.preventDefault()
          }}
        >
          <div className='container'>
            <TextField
              value={nome}
              onChange={event => {
                setNome(event.target.value)
              }}
              name="nome"
              id="nome"
              label="Nome"
              variant="outlined"
              required
              margin={"normal"}
            />
          </div>
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
              select
              value={sexo}
              onChange={event => {
                setSexo(event.target.value)
              }}
              name="sexo"
              id="sexo"
              label="sexo"
              variant="outlined"
              required
              fullWidth
              margin={"normal"}

            >
              <MenuItem key={"M"} value={"M"}>
                Masculino
              </MenuItem>
              <MenuItem key={"F"} value={"F"}>
                Feminino
              </MenuItem>
            </TextField>
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
      </Card>
    </>
  );
}

export default CadastroUsuario;