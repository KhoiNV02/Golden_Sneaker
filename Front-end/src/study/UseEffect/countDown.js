import { useEffect,useState } from "react"
import Xinchao from "../MemoHOC/hello";
function CountDown()
{
    const [CountDown,setCountDown]=useState(180);
    useEffect(()=>
    {
    const timer= setInterval(()=>
    {
        setCountDown((pre)=>pre-1);
    },1000);
    
    return ()=>
    {
        clearInterval(timer);
    }
    },[])
return (
    <div>
        <Xinchao />
        <h1>{CountDown}</h1>
    </div>
)
}
export default CountDown