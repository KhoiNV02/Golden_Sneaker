import { useState, useEffect } from 'react';
function Content()
{
const types=['posts','comments','photos']
const [posts,setPosts]=useState([]);
const [type,setType]=useState(0);
const [topButton,setTopButton]=useState(false);
console.log('render');
useEffect(()=>
{
  fetch(`https://jsonplaceholder.typicode.com/${types[type]}`)
      .then(response =>response.json())
      .then(posts=>{
       {
      setPosts(posts)
      }
      })
},[type])

useEffect(()=>
{
const handleScroll=()=>
{
  if (window.scrollY>200)
  {
    setTopButton(true);
    
  }
  else
  {
    setTopButton(false);
  }
  // console.log(window.scrollY);
}
window.addEventListener('scroll',handleScroll)
return ()=>{
  console.log('hello');
  window.removeEventListener('scroll',handleScroll)
} 
},[])


    return (
        <div>
        
        <button onClick={()=>
          { setType(Math.floor(Math.random()*3))}}>random</button>
       {/* { show && < Content/> } */}
       <ul>
        { 
          posts.map((item)=>
           ( <li key={item.id}>{(item.title||item.name)}</li>)
          )
        }
       </ul>
       {(topButton && <button style={
        {position:'fixed',
      right:20,
      bottom:20,
      }
       }>scroll on top</button>)}
      </div> 
    )
}
export default Content