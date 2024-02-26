import { useState,useCallback } from "react";
import Xinchao from "./hello";
function Increase()
{
    const handleIncrease= useCallback(()=>
    {
        setTime(prev=>prev+1);
    }
    ,[])
    const [time,setTime]=useState(0);
    return(
        <>
       <Xinchao onIncrease={handleIncrease} title="helo"></Xinchao>
        <h1 className="time">
        {time}
        </h1>
        
        </>
    )
}
export default Increase;

//useCallback được dùng để tránh việc render lại 
// khi memo hoạt động nó so sánh ===
// mà tham chiếu thì không so sánh === được
//ở đây là mấy cái hàm nên là nó sẽ bị render lại
// nó có deps tương tự như useEffect