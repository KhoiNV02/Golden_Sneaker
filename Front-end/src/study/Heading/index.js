import clsx from "clsx";
import { useState } from "react";
import styles from './Heading.module.scss'

function Heading()
{
const [active,setActive]=useState(false);
const handleClick=()=>
{
    setActive(!active);
}
    return (
        <>
        <button onClick={handleClick} className={styles.btn}>click ME!!!</button>
         <h1 className={styles.Heading}>Hello xin chào các bạn</h1>
         <h1 className={clsx(styles.Heading,{
            [styles.active]:active,
            'd-f1':true
         })}>Hello xin chào các bạn</h1>
        </>
        
    )
}

export default Heading;