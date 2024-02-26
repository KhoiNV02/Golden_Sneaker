import logo from '../assets/img/nike.png';
import trash from '../assets/img/trash.png';
import CartCard from './components/cartCard/cartCard';
import { useState } from 'react';
function Home() {
  //lấy id của sản phẩm vừa được thêm vào từ CartCard số 2
  const [cashProductId,setCashProductId]=useState();
  //tiến hành reset lại giao diện khi CartCard số 2 xóa đi 1 sản phẩm
  const [reset,setReset]=useState();
  //lấy id của sản phẩm được thêm mới vào
  const getIdOfProductCashed=(id)=>{
  
      setCashProductId(()=>{
      return id;
  });
    setReset(null);  
  }
  //lấy id của sản phẩm bị xóa đi
  const handleReset=(id)=>{
    setReset(()=>{
    return id;
    });
    setCashProductId(null);
  }
  return (
    <>
      <div className="cartMainContent">
        <CartCard getID={getIdOfProductCashed} reset={reset}> </CartCard>
        {/* truyền title,Amount để phân biệt 2 loại CartCard 2 bên */}
        <CartCard title='Your cart' Amount={true} idNewProduct={cashProductId} reset setReset={handleReset}></CartCard>
      </div>
    </>
  );
}

export default Home;
