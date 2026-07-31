import React from 'react'
import Menus from './Menus'



const Body = () => {
  return (
    <>
    <h2 style={{justifyContent:"space-between"}}>Our Menu</h2><br></br>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 220px)", rowGap:"20px", justifyContent:"center",marginBottom:"20px",gap:'50px'}}>
    
    
    <Menus
      name="Burger"
      image="burger.jpeg"
      price="4.60"
      height="100px"
      width="150px"/>

   
      <Menus
        name="Spring Roll" 
        image="spring.jpeg" 
        price="12.40" 
        height="100px"
        width="150px"
      />

      
      <Menus
        name="Arabiatta Fettuccine" 
        image="pasta.jpeg" 
        price="7.50" 
        height="100px"
        width="100px"
      />

       <Menus
        name="Quesadillas" 
        image="quesadilla.jpeg" 
        price="8.00" 
        height="100px"
        width="100px"
      />
         <Menus
        name="Paneer Butter Masala" 
        image="pbm.jpeg" 
        price="10.00" 
        height="100px"
        width="100px"
      />
         <Menus
        name="Tteokbokki" 
        image="tteokbokki.jpeg" 
        price="9.00" 
        height="100px"
        width="100px"
      />
    
  </div>
  </>
  )
}

export default Body