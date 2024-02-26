import clsx from 'clsx';
import style from '../cartCard/cartCard.module.scss';
import logo from '../../../assets/img/nike.png';
import trash from '../../../assets/img/trash.png';
import ShopItem from './ShopItem/ShopItem';
import CartItem from './CartItem/CartItem';
import { useState } from 'react';
function CartCard({ title, Amount,getID,idNewProduct,setReset,reset}) {
  //state tính tổng tiền

  const [total,setTotal]=useState(0);
  const addProduct=(id)=>{
    getID(id);
  }
  const getTotal=(total1)=>{
    setTotal(total1);
  }

  return (
    <>
      <div className={clsx(style.cartCard)}>
        <div className={clsx(style.cartCardTop)}>
          <img src={logo} className={clsx(style.CardTopLogo)} />
        </div>
        <div className={clsx(style.CartTitle)}>
          {title || 'Our Products'}
          {Amount && <span className={clsx(style.Amount)}>${total}</span>}
        </div>
        <div className={clsx(style.cartCardBody)}>{!title ? <ShopItem addProduct={addProduct} reset={reset}></ShopItem>:<CartItem cashProduct={idNewProduct} setReset={setReset} getTotal={getTotal}></CartItem>}</div>
      </div>
    </>
  );
}

export default CartCard;
