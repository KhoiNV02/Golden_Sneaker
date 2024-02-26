import clsx from 'clsx';
import style from '../CartItem/CartItem.module.scss';
import trash from '../../../../assets/img/trash.png';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
function CartItem({cashProduct,setReset,getTotal}) {
 
  const apiUrl = process.env.REACT_APP_API_URL;
  const [cashProducts,setCashProducts]=useState([]);
  //thêm mới sản phẩm từ bên sản phẩm.
  useEffect(()=>{
    if(cashProduct!==null&&cashProduct!==undefined)
    {
        axios.get(`${apiUrl}api/v1/products/${cashProduct}`)
        .then(response => {
          try{
            const newShoe=response.data.shoe;
            newShoe['number']=1;
              setCashProducts([...cashProducts,response.data.shoe])
          }
         catch(err)
         {

         }
        })
        .catch(error => {
          // Xử lý lỗi nếu có
          console.error('Đã có lỗi:', error);
        });
      }
  },[cashProduct])
  //lấy tất cả các món hàng đã được thêm vào trước đó lên giao diện
  useEffect(()=>{
    axios.get(`${apiUrl}api/v1/products`)
    .then(response => {
      var cash=response.data.cartItems;
      var products=response.data.shoeCart;
      products=products.map((item)=>{
          for(var i=0;i<cash.length;i++)
          {
            if (item.id===cash[i].id)
            item['number']=cash[i].number;
          }
      return item;
      })
      setCashProducts(products);
    })
    .catch(error => {
      // Xử lý lỗi nếu có
      console.error('Đã có lỗi:', error);
    });
  },[])
  //hàm xóa sản phẩm ra khỏi database 
const handleDelete=(id)=>{
  const elementToDelete = document.getElementById(id);
  if (elementToDelete) {
    elementToDelete.classList.add(`${style.zoom_out}`);
  const time= setTimeout(() => {
        axios.delete(`${apiUrl}api/v1/products/${id}`)
            .then(response => {
              const newCashProducts = cashProducts.filter((item) => item.id !== id);
                setReset(id); 
                setCashProducts(newCashProducts);
                clearInterval(time);
            })
            .catch((err) => {
                console.log("Lỗi", err);
            });
    }, 500); // Thời gian phù hợp với thời gian hoàn thành hiệu ứng biến mất (500ms trong ví dụ trên)
}
}
useEffect(()=>{
const locationZero=cashProducts.find((item)=>item.number===0)
try
{
  handleDelete(locationZero.id);
}
catch(err)
{

}
const totalMoney=cashProducts.reduce((total,item)=>(total+item.number*item.price),0).toFixed(2);
getTotal(totalMoney);
},[cashProducts])

const handleChange=(id,num)=>{
 const newCashProducts=cashProducts.map((item)=>item);
 for (var i=0;i<newCashProducts.length;i++)
 {
  if (newCashProducts[i].id===id)
  {
    newCashProducts[i].number+=num;
    var data1 = { number: newCashProducts[i].number };
            axios.put(`${apiUrl}api/v1/products/${id}`, data1)
              .then(response => {
                
              })
              .catch(error => {
                console.error('Error: ', error);
              });
              setCashProducts(newCashProducts);
              break;
  }
 }
}

  return (
    <>
     {
       cashProducts.length===0?<div className={style.emptyNotify}>
       <p className={style.emptyNotifyDes}>Your cart is empty.</p>
     </div>:
       cashProducts.map((item)=>{
        return (
          <div key={item.id}>
          <div id="cartItemsContainer">
            <div className={clsx(style.cartItem)} id={item.id}>
              <div className={clsx(style.cartItemLeft)}>
                <div className={clsx(style.cartItemImage)} style={{backgroundColor:`${item.color}`}}>
                  <div className={clsx(style.cartItemImageBack)}>
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
              <div className={clsx(style.cartItemRight)}>
                <div className={clsx(style.cartItemName)}>{item.name}</div>
                <div className={clsx(style.cartItemPrice)}>${item.price.toFixed(2)}</div>
                <div className={clsx(style.cartItemAnimate, style.cartItemActions)}>
                  <div className={clsx(style.cartItemCount)}>
                    <div className={clsx(style.cartItemCountButton, style.minus)} onClick={()=>{handleChange(item.id,-1)}}>-</div>
                    <div className={clsx(style.cartItemCountNumber, style.number)}>{item.number}</div>
                    <div className={clsx(style.cartItemCountButton, style.plus)} onClick={()=>{handleChange(item.id,1)}} >+</div>
                  </div>
                  <div className={clsx(style.cartItemRemove)} onClick={()=>{
                    handleDelete(item.id);
                  }}>
                    <img src={trash} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
       })
     }
   
    </>
  );
}

export default CartItem;
