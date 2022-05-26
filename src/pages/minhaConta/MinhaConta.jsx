import { Button } from '@mui/material';
import './MinhaConta.css';

function MinhaConta() {
    return (
        <><h2 classname="titulo">Minha Conta</h2>
        <b className='bold'>Meus Dados</b>
        <br/>
        <div className='container'>
        <label>Email:  </label>
        <input></input>
        </div>
        <div className='container'>
        <label>Cpf:  </label>
        <input></input>
        </div>
        <div className='container'>
        <label>Data de Nascimento:  </label>
        <input></input>
        </div>
         <div className='container'>
        <label>Usuario:  </label>
        <input></input>
        </div>
        <div className='container'>
        <label>Senha:  </label>
        <input></input>
        </div>
        <div className='container'>
        <label>Contato:  </label>
        <input></input>
        </div>
        <div><Button>Cadastrar Endereço</Button></div>
        
        </>
    );
}

export default MinhaConta;