import './Inicial.css';
import Header from '../../componentes/header/Header'



function Inicial() {
    return (
       <><Header />
       <h2 className='titulo'>
           Seja muito bem vindo a Hermes Express
       </h2>

       <div className="container">
       <div className="row">
       <div className='col-6'>
       <button class="button_solicitar_entrega">Solicitar Entrega</button>
       </div>
       <div className='col-6'>
       <button class="ui secondary basic button">Status de Entrega</button>
       </div>
       <button class="ui positive basic button">Contratar entregador</button>
       </div>
       </div></>
       
    );
    
   
   
}

export default Inicial;