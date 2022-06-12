import React, { useContext, useEffect } from 'react'
import axios from "../../axios";
import DataContext from '../../data/DataContext';

import {
  Container
} from "./styles"

const MeusEnderecos = () => {

    const { state, setState } = useContext(DataContext)

    const registerRequest = async () => {
      return axios.get(`/address/getByUserId/${state.id}`, {}, {
        headers: {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
        }
      })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
              console.log(error.response);
              alert(error);
          })
  }

  useEffect(() => {
    registerRequest();
  }, []);


    return (
      <>
        <Container>

        </Container>
      </>
    )
}

export default MeusEnderecos