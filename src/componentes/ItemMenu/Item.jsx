import React from 'react'

import { 
    SideBarLink,
    SideBarLabel
  } from "./styles";

const SubMenu = (props) => {
  console.log(props)
  return (
    <>
      <SideBarLink to={ props.url }>
         { props.icone }
          <SideBarLabel>
            { props.descricao }
          </SideBarLabel>
      </SideBarLink>
    </>
  )
}

export default SubMenu