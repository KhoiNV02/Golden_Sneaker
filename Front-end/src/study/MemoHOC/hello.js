import { memo } from "react";

function Xinchao({onIncrease})
{
console.log('render');
    return (
        <>
        <h1>xin chào các bạn</h1>
        <button onClick={onIncrease}>Click Me!!</button>
        </>
    )
}

export default memo(Xinchao)