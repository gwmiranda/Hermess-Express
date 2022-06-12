import React from 'react'

export const data = {
    id: '',
    token: '',
    nome: '',
    password: '',
    contato: '',
    cpf: '',
    data_nascimento: '',
    email: '',
    sexo: '',
    id_permissao: '',
}

const DataContext = React.createContext(data)

export default DataContext