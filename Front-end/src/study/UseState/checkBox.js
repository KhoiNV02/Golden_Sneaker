import { useState } from "react"
const courses=[
    {id:1,
    name:'HTMl, CSS'
    },
    {id:2,
        name:    'ReactJS',
        },
        {id:3,
            name: 'Javascripts',
            },


]
function Random()
{
    const handleSubmit=()=>
    {
        console.log(checked);
    }
    const handleCheck=(id) => 
    {
       setChecked((item)=>
       {
        if (checked.includes(id))
        {
        return checked.filter((item)=>{return item!==id})
        }
        else
        return [
        ...item,
        id,    
        ]
       })
    }
  const [checked,setChecked]=useState([1]);
return (
    <> 
    {
        courses.map((course)=>
            <div key={course.id}>
            <input 
            type='checkbox'
            checked={
                checked.includes(course.id)}
            onChange={ 
                ()=>handleCheck(course.id)
                     }
            />
            {course.name}
            </div>
            )
    }
    <button onClick={handleSubmit}> register</button>
    </>
    )  
}

export default Random;

//các note cần lưu ý về kiến thức
// - component sẽ được re-render lại mỗi khi setState
// - truyền callback vào trong setState, nó sẽ trả lại giá trị trước đó
// - giá trị khởi tạo có thể truyền là 1 hàm vì giá trị này có thể đòi hỏi
// tính toán nhiều nhưng chỉ cần tính 1 lần ban đầu
// set State là thay thế giá trị cũ bằng giá trị mới,
// điều này có nghĩa là giá trị cũ sẽ bị xóa đi, và thay vào đó bằng giá trị mới.
