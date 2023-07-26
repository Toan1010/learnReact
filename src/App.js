import { useState, useMemo } from "react";

//useMemo giup tranh thuc hien lai 1 logic nao do ko can thieet

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [products, setProducts] = useState([]); 

  const submit = () => {
    setProducts( [...products,{
      name: name,
      price: +price
    }])
  }

  const total = useMemo(()=>{
    let result = products.reduce((re,product) => {
      return re+product.price;
    },0);
    return result;
  },[products])

  return (
    <div className="App" style={{padding:50,}}>
      <input
        placeholder="Enter name: "
        value={name || ''}
        onChange={(e)=>{setName(e.target.value)}}
      />
      <br/>
      <input
        placeholder="Enter price: "
        value={price || ''}
        onChange={(e)=>{setPrice(e.target.value)}}
      />
      <br></br>
      <button onClick={submit}>Submit</button>
      <h1>Total: {total}</h1>

      <ul>
        {products.map((product, index)=> {
          return <li key={index}>{product.name} - {product.price}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
