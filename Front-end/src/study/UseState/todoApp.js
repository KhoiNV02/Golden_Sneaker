import { useState } from "react";
function Todo()
{
    const [jobs,setJobs]=useState(()=>{
        return JSON.parse(localStorage.getItem('jobs'))||[];
    });
    const [job,setJob]=useState('');
    console.log(job);
const handleAdd=(job)=>
{
    setJobs(()=>
    {
        const newJobs= [
            ...jobs,
                job
            ]
    localStorage.setItem("jobs",JSON.stringify(newJobs));
        return newJobs;
    })
    setJob('');
}
return (
    <>
    <input
    value={job}
    onChange={
        (e)=>
        {
            setJob(e.target.value);
        }
    }
    >
    
    </input>
    <button onClick={()=>handleAdd(job)}>
        Add
    </button>
    <ul>
        {jobs.map((item,index)=><li key={index}>{item}</li>)}
    </ul>
    </>
)
}
export default Todo;