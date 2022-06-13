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
import EditarEndereco from "../formularios/endereco/EditarEndereco";
import CadastrarEndereco from "../formularios/endereco/CadastrarEndereco";
import ModalDelete from "../modal/remover/ModalDelete";

const MeusEnderecos = () => {

    const { state, setState } = useContext(DataContext)

    const [openRegister, setOpenRegister] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);

    const [enderecos, setEnderecos ] = useState();
    const [editEndereco, setEditEndereco ] = useState();
    const [deleteEndereco, setDeleteEndereco ] = useState();

    const handleOpenRegisterEndereco = () => setOpenRegister(true);
    const handleOpenEditEndereco = (state) => {
        setEditEndereco(state)
        setOpenEdit(true)
    };
    const handleOpenRemove = (id) => {
        console.log(id)
        setDeleteEndereco(id)
        setOpenRemove(true)
    };

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
          })
    }

    useEffect(() => {
      registerRequest();
    }, []);

    const requestEditEndereco = async (formSate) => {
        return axios.put(`/address/update/${formSate.id}`, formSate)
            .then((res) => {
                handleClose()
                registerRequest()
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    const requestRemoveEndereco = async (id) => {
        return axios.delete(`/address/delete/${id}`)
            .then((res) => {
                handleClose()
                registerRequest()
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    const requestCadastrarEndereco = async (formData) => {
        return axios.post('/address/register', formData)
            .then((res) => {
                handleClose()
                registerRequest()
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    return (
      <>
        <Modal
            open={openRegister}
            onClose={handleClose}
        > 
            <CadastrarEndereco
                close = { handleClose }
                onSubmit = {requestCadastrarEndereco}
            />
        </Modal>

        <Modal
            open={openEdit}
            onClose={handleClose}
        > 
            <EditarEndereco
                close = { handleClose }
                state = { editEndereco }
                onSubmit = { requestEditEndereco }
            />
        </Modal>

        {/* <Modal
            open={openRemove}
            onClose={handleClose}
        > 
            <ModalDelete
                close = { handleClose }
                descricao = "Deseja confirmar a exclusão desse endereco?"
                onSubmit = { requestRemoveEndereco }
            />
        </Modal> */}

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
                onClick={() => handleOpenRegisterEndereco()}
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
                      onClick={() => handleOpenEditEndereco(endereco)}
                      variant="contained"
                      style={{margin: "2px"}}
                      startIcon={<EditIcon />}>
                        Editar
                    </Button>
                    <Button 
                      color='warning' 
                      // onClick={() => handleOpenRemove(endereco.id)}
                      onClick={() => requestRemoveEndereco(endereco.id)}
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