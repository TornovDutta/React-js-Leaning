import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function ProductsList() {
  const [url, setUrl] = useState("http://localhost:9000/products");
  const { data: products, loading, error } = useFetch(url);

  return (
    <section className="productlist">
      <button onClick={() => setUrl("http://localhost:9000/products?in_stock=true")}>
        In Stock
      </button>
      <button onClick={() => setUrl("http://localhost:9000/products")}>
        All
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> — ₹{product.price} —{" "}
              {product.in_stock ? "In stock" : "Out of stock"}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
