import React, { useContext, useState } from 'react';
import DataContext from '../../data/DataContext';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import {
    Container,
    ContainerGrid,
    ContainerPhoto,
    Photo,
    ContainerData,
    TittleContainer,
    ContainerDataGrid2,
    ContainerDataGrid3,
    Label,
    Content
} from "./styles"

import {
    Button, 
} from "@mui/material";

const MinhaConta = () => {

    const { state, setState } = useContext(DataContext)

  return (
    <Container>
        <TittleContainer>
            <div>
                { state.nome }
            </div>
            <div>
            <Button 
                // onClick={() => handleOpenRegisterEndereco()}
                variant="contained"
                color="primary" 
                style={{margin: "2px"}}
                startIcon={<AddCircleOutlineIcon />}>
                  Editar Informações
              </Button>
              <Button 
                color="primary" 
                // onClick={() => handleOpenRegisterEndereco()}
                variant="contained"
                style={{margin: "2px"}}
                startIcon={<AddCircleOutlineIcon />}>
                  Editar Senha
              </Button>
            </div>
        </TittleContainer>
        <ContainerGrid>
            <ContainerPhoto>
                <Photo>
                    <p>Foto</p>
                </Photo>
            </ContainerPhoto>
            <ContainerData>
                <ContainerDataGrid2>
                    <Label>
                        E-mail:
                        <div>
                            <span>{ state.email }</span>
                        </div>  
                    </Label>
                    <Label>
                        Cpf:
                        <div>
                            <span>{ state.cpf }</span>
                        </div>  
                    </Label>
                </ContainerDataGrid2>
                <ContainerDataGrid3>
                    <Label>
                        Sexo:
                        <div>
                            <span>{ state.sexo == 'M' ? "Masculino" : "Feminino" }</span>
                        </div>  
                    </Label>
                    <Label>
                        Data Nascimento:
                        <div>
                            <span>{ state.data_nascimento }</span> 
                        </div>  
                    </Label>
                    <Label>
                        Contato:
                        <div>
                        <span>{ state.contato }</span>
                        </div>  
                    </Label>
                </ContainerDataGrid3>
            </ContainerData>
        </ContainerGrid>
    </Container>
  )
}

export default MinhaConta