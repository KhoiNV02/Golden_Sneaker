import clsx from 'clsx';
import { useEffect, useRef, useState } from "react";
import style from '../ShopItem/ShopItem.module.scss';
import check from '../../../../assets/img/check.png';
import axios from 'axios';
function ShopItem({addProduct,reset}) {

  const [shopItems,setShopItems]=useState([]);
  const [notActives,setNotActives]=useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  //effect này sử dụng để tiến hành reset lại giao diện khi có 1 sản phẩm bị xóa khỏi mục thanh toán ở CartCash 2
useEffect(()=>{
    var newNotActives=notActives.filter((item)=>item!=reset)
    setNotActives(newNotActives);
  },[reset])
  //Effect để call API lấy toàn bộ sản phẩm lên từ database
useEffect(()=>{
  axios.get(apiUrl)
  .then(response => {
    var shoeCarts;
    axios.get(`${apiUrl}api/v1/products`)
    .then(response => {
    shoeCarts=response.data.shoeCart.map((item)=>item.id);
    })
    .then(res=>
    {
      setNotActives([...notActives,...shoeCarts]);
    })
    setShopItems(response.data.products);
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Đã có lỗi:', error);
  });
},[])
//add 1 sản phẩm mới vào CartCash 2
const handleAdd=(id)=>{
  if (!notActives.includes(id))
  {
    var data = { id:id, number: 1 };
    axios.post(`${apiUrl}api/v1/products`, data)
          .then(response => {
            setNotActives([...notActives,id]);
            addProduct(id);
          }
          )
          .catch(error => {
            console.error('Error: ', error);
          });
  }
}
  return (
    <>
    {shopItems.map((item)=>{
      return (
<div key={item.id}>
    <div className={clsx(style.ShopItem)}>
      <div className={clsx(style.ShopItemImage)} style={{ backgroundColor: `${item.color}` }}>
        <img
          src={item.image}
          alt=""
        />
      </div>
      <div className={clsx(style.ShopItemName)}>{item.name}</div>
      <div className={clsx(style.ShopItemDescription)}>
      {item.description}
      </div>
      <div className={clsx(style.ShopItemBot)}>
        <div className={clsx(style.cartShopItemPrice)}>${item.price.toFixed(2)}</div>
        <div className={clsx(style.ShopItemAddToCart,{
          [style.NotActive]:notActives.includes(item.id),
        })} onClick={()=>{
          handleAdd(item.id);
        }}>
          {
            notActives.includes(item.id)? <img src={check} alt="" style={{ transform: 'scale(0.3)'}} />:<p>ADD TO CART</p>
          }
        </div>
      </div>
    </div>
  </div>
      );
    })}
    </>
  );
}

export default ShopItem;
