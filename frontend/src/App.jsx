import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);
  if (error) {
    return <h1> Something went Wrong.</h1>;
  }

  return (
    <div className="flex justify-center items-center p-10 flex-col w-[90%] mx-auto">
      <div className="flex justify-evenly w-full">
        <h1 className="text-3xl font-bold underline underline-offset-4 ">
          Api Handling
        </h1>
        <h1 className="text-xl font-bold underline underline-offset-4 ">
          Total Products: {products.length}
        </h1>
      </div>

      <div className="grid grid-cols-3 place-content-center p-5 gap-5">
        {loading && <h1>Loading Card ...</h1>}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-center items-center flex-col p-5 border rounded-md bg-black/5 gap-5"
          >
            <div className="flex justify-center items-center w-full">
              <img
                className="w-[150px] h-[150px] object-cover rounded-lg"
                src={`${product.image}`}
                alt={product.name}
              />
            </div>
            <h2 className="text-2xl font-bold">{product.name}</h2>

            <div className="flex justify-between items-center w-full px-5">
              <p>${product.price}</p>
              <p className="text-sm font-semibold">{product.category}</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-5">
              <p className="w-[80%] flex justify-center items-center text-center">
                {product.description}
              </p>
              <p>Stock : {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
