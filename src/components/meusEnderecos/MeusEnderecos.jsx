import React, { useContext, useEffect, useState } from 'react'
import axios from "../../axios";
import DataContext from '../../data/DataContext';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import {
  Container,
  Table
} from "./styles"

import {
  Button, 
  Modal,
} from "@mui/material";

const MeusEnderecos = () => {

    const { state, setState } = useContext(DataContext)

    const [openRegister, setOpenRegister] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);

    const [ enderecos, setEnderecos ] = useState();

    const handleClose = () => {
      setOpenRegister(false)
      setOpenEdit(false)
      setOpenRemove(false)
  };

    const registerRequest = async () => {
      return axios.get(`/address/getByUserId/${state.id}`)
          .then((res) => {
            setEnderecos(res.data.data.endereco);
          })
          .catch((error) => {
              console.log(error.response);
              alert(error);
          })
    }

    useEffect(() => {
      registerRequest();
    }, []);

    console.log(enderecos);

    return (
      <>
        <Modal
            open={openRegister}
            onClose={handleClose}
        > 
            {/* <EditarUsuario
                close = { handleClose }
                state = { state }
            />  */}
        </Modal>

        <Modal
            open={openEdit}
            onClose={handleClose}
        > 
            {/* <EditarUsuario
                close = { handleClose }
                state = { state }
            />  */}
        </Modal>

        <Modal
            open={openRemove}
            onClose={handleClose}
        > 
            {/* <EditarUsuario
                close = { handleClose }
                state = { state }
            />  */}
        </Modal>

        <Table>
          <thead>
            <th>ID</th>
            <th>Descricao</th>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Complemento</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Cep</th>
            <th colspan="2">
              <Button 
                color='warning' 
                // onClick={() => props.close()}
                variant="contained"
                style={{backgroundColor: "green"}}
                startIcon={<AddCircleOutlineIcon />}>
                  Adicionar Endereço
              </Button>
            </th>
          </thead>
            {enderecos &&
              enderecos.map((endereco) =>(
                <tbody>
                  <td>{endereco.id}</td>
                  <td>{endereco.descricao}</td>
                  <td>{endereco.logradouro}</td>
                  <td>{endereco.numero}</td>
                  <td>{endereco.complemento}</td>
                  <td>{endereco.bairro}</td>
                  <td>{endereco.cidade}</td>
                  <td>{endereco.estado}</td>
                  <td>{endereco.cep}</td>
                  <td colspan="2">
                    <Button 
                      color='primary' 
                      // onClick={() => props.close()}
                      variant="contained"
                      style={{margin: "2px"}}
                      startIcon={<EditIcon />}>
                        Editar
                    </Button>
                    <Button 
                      color='warning' 
                      // onClick={() => props.close()}
                      variant="contained"
                      style={{backgroundColor: "red", margin: "2px"}}
                      startIcon={<DeleteIcon />}>
                        Remover
                    </Button>
                  </td>
                </tbody>
            ))}
        </Table>
      </>
    )
}

export default MeusEnderecos