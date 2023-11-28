/* 
There are three key elements in this API that we need to understand:

1. createContext - This “creates the context” Duh… But yes, it’s how we can create the context. It takes in any value, be it a number, string, or object, which can be referred to as the default value of the context, and returns a context object that can be used to pass down data to components

2. useContext - This hook is used to consume data from a context object created by createContext. We can use this hook inside our component to retrieve the data that we need. This hook accepts the context object as an argument

3. ContextObject.Provider - The context object comes with the Provider component that accepts a prop called value, which is the context value that’s going to be passed down to the components no matter how deeply they’re nested. In other words, a way to “provide” the context value to these components
*/

import { createContext, useContext, useState } from "react";

const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default function Context_test() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = () => {};

  return (
    /* We are going to pass the things that we want to inject to these 
    components using the value prop. This value prop will overwrite the 
    default value */
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
      <ProductDetail />
    </ShopContext.Provider>
  );
}

// -----------------------------------------------------------------------------

function Links() {
  // We must pass the ShopContext object itself as an argument
  const { cartItems } = useContext(ShopContext);

  return (
    <ul>
      <li>
        <a>
          <span>Cart</span>
          <div>{cartItems.length}</div>
        </a>
      </li>
    </ul>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <Links />
      </nav>
    </header>
  );
}

// -----------------------------------------------------------------------------

function ProductDetail() {
  const { products, addToCart } = useContext(ShopContext);

  // simple simul of product filtering
  const product = products.find((p) => p.id === 1);

  return (
    <div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
