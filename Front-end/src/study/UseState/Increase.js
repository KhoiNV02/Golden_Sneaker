import { useState } from "react"
function Increase()
{
    const [counter,setCounter]=useState(()=>
    {
        const total=(1+2+5+15)*0;
        return total;
    })
    const handleIncrease = () =>
    {
        setCounter((prev)=>prev+1);
    }
    return (
        <>
          <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
        </>
    )
}

export default Increase;

//các note cần lưu ý về kiến thức
// - component sẽ được re-render lại mỗi khi setState
// - truyền callback vào trong setState, nó sẽ trả lại giá trị trước đó
// - giá trị khởi tạo có thể truyền là 1 hàm vì giá trị này có thể đòi hỏi
// tính toán nhiều nhưng chỉ cần tính 1 lần ban đầu
// set State là thay thế giá trị cũ bằng giá trị mới,
// điều này có nghĩa là giá trị cũ sẽ bị xóa đi, và thay vào đó bằng giá trị mới.
