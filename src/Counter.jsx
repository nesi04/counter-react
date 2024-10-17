import React,{useState} from "react"
function Counter(){
    const [count,setCount]=useState(0);
    const incr=()=>{
        setCount(count+1);
    }
    const dec=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

    return(<div className="container">
        <h1>{count}</h1>
        <button onClick={dec} className="Decrease">DECREASE</button>
      
        <button onClick={reset} className="Reset">RESET</button>
       
        <button onClick={incr} className="Increase">INCREASE</button>


    </div>);



}

export default Counter
