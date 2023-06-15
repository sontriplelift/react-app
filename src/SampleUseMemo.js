import { useMemo, useRef, useState } from "react";

function SampleUseMemo() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [products, setProducts] = useState([]);
  const nameRef = useRef();

  const handleAdd = () => {
    setProducts([
      ...products, {
        name,
        price: parseInt(price)
      }]
    );

    setName('');
    setPrice('');
    nameRef.current.focus();
  }

  const totalPrice = useMemo(() => {
    return products.reduce((total, currValue) => {
      console.log('re-calculate');
      return total + currValue.price;
    }, 0);
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter price..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div>Total Price: {totalPrice}</div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default SampleUseMemo;