import React from 'react'

// Destructure props directly in the arguments
const Menus = ({ name, image, price,height,width }) => {
  return (
    <div style={{ border: "1px solid white",width:"200px",backgroundColor:"#1E1E1E"}}>
        <h3>{name}</h3>
        <img src={image} alt={name} height={height} width={width} />
        <h4>Price: ${price}</h4>
    </div>
  )
}

export default Menus
