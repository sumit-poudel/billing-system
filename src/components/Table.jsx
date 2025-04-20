import { useState,useMemo } from "react";

const Table = () => {
  const [products, setProducts] = useState([
    {
        sn: "",
        name: "",
        price: "",
        quantity: "",
        discount: "",
    }
  ]);
  
  const grandTotal = useMemo(() => {
    return products.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      const discount = Number(item.discount) || 0;
      const total = (price * quantity) - discount;
      return sum + total;
    }, 0);
  }, [products]);

  const handleInputChange = (index, field, value) => {
    setProducts((prevProducts) => {
      const updated = [...prevProducts];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return updated;
    });
  };

  const billData = products.map((product, index) => {

    if(index==products.length-1){
        if (product.name !== "") {
            products.push({
                sn: products.length,
                name: "",
                price: "",
                quantity: "",
                discount: "",
            });
            setProducts(products);         
        }
    }


    return (
      <tr key={index}>
        <td>
          {" "}
          <strong>{index}</strong>{" "}
        </td>
        <td>
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            value={product.price}
            onChange={(e) => handleInputChange(index, "price", e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) =>
              handleInputChange(index, "quantity", e.target.value)
            }
          />
        </td>
        <td>
          <input
            type="number"
            value={product.discount}
            onChange={(e) =>
              handleInputChange(index, "discount", e.target.value)
            }
          />
        </td>
        <td>
          <strong>{Number(product.quantity) * Number(product.price)-Number(product.discount)}</strong>
        </td>
      </tr>
    );
  });

  return (
    <table border="1">
      <thead>
        <tr>
          <th>S.N.</th>
          <th>Name</th>
          <th>price</th>
          <th>Quantity</th>
          <th>Discount</th>
          <th style={{padding:"0 10px"}} >Total</th>
        </tr>
      </thead>
      <tbody>{billData}
      <tr>
      <td colSpan="5" >Grand total</td>
        <td>{grandTotal}</td>
      </tr>
      </tbody>
    </table>
  );
};

export default Table;
