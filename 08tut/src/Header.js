import React from 'react'

const Header = ({title}) => {
 /*  const headerStyle = {  
    backgroundColor:'blue',
  color:'#ff0'
  }; */
  //inline header header ın yanına style={headerStyle} ile
  return (
    <header >
        <h1>{title}</h1>
        </header>
  )
}

Header.defaultProps ={
  title:"Default Title"
}
export default Header;