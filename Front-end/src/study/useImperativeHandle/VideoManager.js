
import { useRef } from "react";
import Video from "../../Video";

function Computer()
{
    
    const handlePlay=()=>
    {
     VideoRef.current.play();   
    }
    const handlePause=()=>
    {
     VideoRef.current.pause();   
    }
    
    const VideoRef=useRef();
    console.log(VideoRef);
return (
    <>
   <Video ref={VideoRef} />
   <button onClick={handlePlay}>Play</button>
   <button onClick={handlePause}>Pause</button>
    </>
)
}
export default Computer;