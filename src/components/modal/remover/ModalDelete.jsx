import {Button,} from "@mui/material";

import {Buttons, Form, TitleModal} from "./styles";

const ModalDelete = (props) => {

    return (
        <>
            <Form
                onSubmit={() => props.onSubmit()}
            >
                <TitleModal>Remover</TitleModal>
                <div>
                    {props.descricao}
                </div>
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
                    >Confirmar</Button>
                </Buttons>
            </Form>
        </>
    );
}

export default ModalDelete;