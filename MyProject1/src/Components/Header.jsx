import React from 'react'

const Header = () => {
  return (
    <div style = {{display:"flex", gap:"200px", backgroundColor:'beige', width:"100%"}}>
        <img src="logo.png" height='100px' width='100px'></img>
        <h1 style={{ color:"red", fontFamily:"Georgia,serif"}}> Welcome to our Hotel</h1>
    </div>
  )
}

export default Header