import React, { useContext, useState } from 'react';
import DataContext from '../../data/DataContext';

import {
    Container,
    ContainerPhoto,
    Photo,
    ContainerData,
    TittleContainer,
    ContainerDataGrid2,
    ContainerDataGrid3,
    Label,
    Content
} from "./styles"

const MinhaConta = () => {

    const { state, setState } = useContext(DataContext)

  return (
    <Container>
        <ContainerPhoto>
            <Photo>
                <p>Foto</p>
            </Photo>
        </ContainerPhoto>
        <ContainerData>
            <TittleContainer>
                { state.nome }
            </TittleContainer>
            <ContainerDataGrid2>
                <Label>
                    E-mail:
                    <div>
                        <span>{ state.nome }</span>
                    </div>  
                </Label>
                <Label>
                    Cpf:
                    <div>
                        <span>{ state.nome }</span>
                    </div>  
                </Label>
            </ContainerDataGrid2>
            <ContainerDataGrid3>
                <Label>
                    Sexo:
                    <div>
                        <span>{ state.nome }</span>
                    </div>  
                </Label>
                <Label>
                    Data Nascimento:
                    <div>
                        <span>{ state.nome }</span> 
                    </div>  
                </Label>
                <Label>
                    Contato:
                    <div>
                    <span>{ state.nome }</span>
                    </div>  
                </Label>
            </ContainerDataGrid3>
        </ContainerData>
    </Container>
  )
}

export default MinhaConta