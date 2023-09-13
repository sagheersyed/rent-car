"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    }
    fetchData();
  }, []);
  // console.log(products);
  return (
    <div>
      {products.map((product) => (
        <h1>{product.title}</h1>
      ))}
    </div>
  );
};

export default Page;
