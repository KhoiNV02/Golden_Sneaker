import { useState, useEffect, useRef, useMemo } from 'react';
function SumProduct() {
  const nameRef = useRef();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);

    setName('');
    setPrice('');
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((result, item) => {
      console.log('Tính toán lại');
      return result + item.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <>
      <div>
        <input
          ref={nameRef}
          placeholder="enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <input placeholder="enter the price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </div>
      <h1>Total: {total}</h1>
      <button onClick={handleAddProduct}>Add product</button>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name}-{item.price}
          </li>
        ))}
      </ul>
    </>
  );
}
export default SumProduct;
