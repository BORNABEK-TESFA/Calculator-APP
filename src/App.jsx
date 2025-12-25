 import React from "react";
import ProductList from "./ProductList";
import products from "./Products.js";

function App() {
  return (
    <div>
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
