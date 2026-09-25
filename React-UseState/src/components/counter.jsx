import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function inc(){
        if(count<10)
        setCount(count+1);
        else
            alert("Cannot exceed 10");
    }
    function dec(){
        if(count>0)
        setCount(count-1);
        else
            alert("Cannot be below 0");
    }
  return (
    <div> 
      <h3>Counter App </h3>
      <br></br>
     <button onClick={inc}>+</button> 
      <span>{count}</span>
     <button onClick={dec}>-</button>
      </div>
  )
}

export default Counter