import React from 'react'

const Counter = () => {
    const [count, setcount] = useState(0);
    function inc(){

    }
    function dec(){
        
    }
  return (
    <div> 
      <h3>Counter App </h3>
      <br></br>
     <button>+</button> 
      <span>0</span>
     <button>-</button>
      </div>
  )
}

export default Counter