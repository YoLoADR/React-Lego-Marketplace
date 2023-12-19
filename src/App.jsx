import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./firebase";

import Header from "./containers/Header";
import ProductList from "./components/ProductList";

import { mockProducts } from "./db/productsDB";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isDatabaseLoaded, setIsDatabaseLoaded] = useState(false);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      //const fetchedProducts = snapshot.docs.map(doc => doc.data());
      const fetchedProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched products:", fetchedProducts); // Log pour vérifier les produits
      setProducts(fetchedProducts);
      setIsDatabaseLoaded(true);
    });
  });

  return (
    <main className="main-container">
      <div className="menu">Menu</div>
      <div className="header">Header</div>
      <div className="content">Content</div>
      <ProductList products={isDatabaseLoaded ? products : mockProducts} />
      <div className="footer">Footer</div>
    </main>
  );
}
