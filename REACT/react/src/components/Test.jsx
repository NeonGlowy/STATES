import React,{useState} from "react";

function Test(){
    const [ hello,setHello]= useState();
    const [ hi ,setHi]= useState ();
    return(
        <>
        <div>
            <input type=" text"
        placeholder="name 1"
        value={hello}
    onChange={(e)=> setHello(e.target.value)}/>
    <p> {hello}<br/></p> <br/>
   </div> 
   <div>
    <input type=" text"
        placeholder="name 2"
        value={hi}
    onChange={(e)=> setHi(e.target.value)}/>
    <p> you are {hello} {hi}<br/></p> <br/>
        </div>
        </>
    
    )
}

export default Test