import "./MinhaConta.css"

import MinhaContaComponent from "../../components/minhaConta/MinhaConta";
import Menu from "../../components/menuLateral/Menu";
import MeusEnderecos from "../../components/meusEnderecos/MeusEnderecos";
import {useContext} from "react";
import DataContext from "../../data/DataContext";

function MinhaConta() {
    const {state, setState} = useContext(DataContext)

    return (
        <div>
            <Menu/>
            <div className={"title"}>
                <h1 >Minha Conta</h1>
            </div>
            <div>
                <MinhaContaComponent />
            </div>
            {state.id_permissao == 1 ? (
                <>
                    <div className={"title"}>
                        <h1 >Meus Endereços</h1>
                    </div>
                    <div>
                        <MeusEnderecos>

                        </MeusEnderecos>
                    </div>
                </>
            ):(<></>)}
        </div>
    );
}

export default MinhaConta;