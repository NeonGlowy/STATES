import { useState } from "react"

function Work()
{
const [ hello,setHello]= useState();
return(
    <div>
        <input type=" text"
    placeholder="name 1"
    value={hello}
onChange={(e)=> setHello(e.target.value)}/>
<p> {hello}<br/></p> <br/>
<input type=" text"
    placeholder="name 2"
    value={hello}
onChange={(e)=> setHello(e.target.value)}/>
<p> you are {hello}<br/></p> <br/>
    </div>

)
}
export default Work
