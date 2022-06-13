import "./MinhaConta.css"

import MinhaContaComponent from "../../components/minhaConta/MinhaConta";
import Menu from "../../components/menuLateral/Menu";
import MeusEnderecos from "../../components/meusEnderecos/MeusEnderecos";

function MinhaConta() {
    return (
        <div>
            <Menu/>
            <div className={"title"}>
                <h1 >Minha Conta</h1>
            </div>
            <div>
                <MinhaContaComponent />
            </div>
            <div className={"title"}>
                <h1 >Meus Endereços</h1>
            </div>
            <div>
                <MeusEnderecos>

                </MeusEnderecos>
            </div>
        </div>
    );
}

export default MinhaConta;