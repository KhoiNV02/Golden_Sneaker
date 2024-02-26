import { useState,useEffect,useRef } from "react";
function Timer()
{
   const inte=useRef();
   const h1ref=useRef();
            const handleStart=()=>{
                     inte.current=setInterval(()=>{
                        setTime((prev)=>prev-1);
                       },1000)
        h1ref.current.style.color='red';
             }
   const handleStop=()=>
   {
    clearInterval(inte.current);
   } 
    const [time,setTime]=useState(60);
    return (
        <>
        <h1 ref={h1ref}>{time}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </>
    )
}
export default Timer;
//useRef là 1 dạng tham chiếu
// ngoài việc tham chiếu để lưu trữ giá trị, nó
//còn hỗ trợ tham chiếu đến element thay thế cho
// việc dom thường 
