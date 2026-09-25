import React,{useState} from 'react'

const Move = () => {
    const [x, setX] = useState(0);
    const [y,setY] = useState(0);
    function up(){
        setY(y-5);
    }
    function down() {
        setY(y+5);
    }
    function left() {
        setX(x-5);
    }
    function right(){
        setX(x+5);

    }
  return (
    <div>
        <h3> CLICK BUTTON TO MOVE IMAGE </h3>
        
        <button onClick={up}>UP</button>
        
        <button onClick={down}>DOWN</button>
       
        <button onClick={left}>LEFT</button>
       
        <button onClick={right}>RIGHT</button>
        
        <br/><br/><br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNw582GSO6lA3ALQMbio1VnO63fzy8zwUzvI8VaoXGg&s=10"
        style={{width: "100px", position: "relative", top:y, left:x}}/>
    </div>
  )
}

export default Move