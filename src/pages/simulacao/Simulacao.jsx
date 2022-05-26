import { Button } from '@mui/material';
import './Simulacao.css';

function Simulacao() {
    return (
        <><p>Tela Simulacao</p>
        <div class="ui input">
        <input type="number" placeholder="Cep..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Cidade..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Bairro..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Logradouro..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Número..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Estado..."/>
        </div>
        <div class="ui input">
        <select  placeholder="Tipo Encomenda...">
            <option>Tipo da encomeda</option>
        </select>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Cep..."/>
        </div>
        <div class="ui input">
        <input type="number" placeholder="Peso Kg..."/>
        </div>
        <div class="ui input">
        <input type="number" placeholder="Valor..."/>
        </div>
        <div class="ui input">
        <input type="number" placeholder="Altura..."/>
        </div>
        <div class="ui input">
        <input type="number" placeholder="Largura..."/>
        </div>
        <div class="ui input">
        <input type="number" placeholder="Comprimento..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Cep..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Cep..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Cep..."/>
        </div>
        <div class="ui input">
        <input type="text" placeholder="Cep..."/>
        </div>
        <div className='labelTotal'>
        <label>Total:</label>
        </div>
        
        <Button className='btnSimular'>Simular</Button>
        <Button className='btnHistorico'>Histórico de Encomendas</Button>
        <Button className='btnHistorico'>Opções de Entrega</Button>
        
        </>
    );
}

export default Simulacao;