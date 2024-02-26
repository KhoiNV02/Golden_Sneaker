import { useState,useEffect } from "react"
function Effect()
{
    const [title,setTitle]=useState('');
    useEffect(()=>
    {
        document.title=title;
    })
return (
    <>
    <input
    value={title}
    onChange={
        (e)=>
        {
            setTitle(e.target.value)
        }
    }
    >
    </input>
    </>
)
}
export default Effect

// useEffect(callback,[deps])
// có 3 trường hợp sử dụng
// note chung
// 1. callback luôn được gọi sau khi component mounted

//Trường hợp 1: useEffect(callback), ít dùng
//gọi callback mỗi khi component re render
// gọi callback sau khi component thêm element thêm vào dom

//trường hợp 2 useEffect(callback,[])
//chỉ gọi callback 1 lần duy nhất

//trường hợp 3 useEffect(callback,[deps])
