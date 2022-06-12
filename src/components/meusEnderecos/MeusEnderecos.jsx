import React, { useContext, useEffect, useState } from 'react'
import axios from "../../axios";
import DataContext from '../../data/DataContext';

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

    const [ enderecos, setEnderecos ] = useState();

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
            <th></th>
            <th></th>
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
                  <td><Button >Editar</Button></td>
                  <td><Button >Remover</Button></td>
                </tbody>
            ))}
        </Table>
      </>
    )
}

export default MeusEnderecos