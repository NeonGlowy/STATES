import {useState} from "react"; 
function Message(){
const [hello, setHello]=useState();

return(
    <div>
        <h1>hell O earth</h1>
    
    <input type="text"
  placeholder="enter any thing that comes to mind"
value={hello}
onChange={(e)=> setHello(e.target.value)}/>
<p> mind{hello}<br/></p> <br/>
</div>
)
}
export default Message 