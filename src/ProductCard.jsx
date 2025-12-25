import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className={`card ${!product.inStock ? "out-of-stock" : ""}`}>
      
      {/* Render image only if it exists */}
      {product.image && (
        <img src={product.image} alt={product.name} />
      )}

      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>

      {/* Conditional labels */}
      {!product.inStock && <span className="badge">Out of Stock</span>}

      {product.isFeatured && <span className="featured">Featured</span>}

      {product.price > 100 && (
        <p className="premium">Premium Product</p>
      )}
    </div>
  );
}

export default ProductCard;
