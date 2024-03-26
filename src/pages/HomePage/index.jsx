import React, { useState, useEffect } from "react";
import style from "./HomePage.module.css";
import api from "../../api";
import ProductCard from "../../components/ProductCard";
import MainLayout from "../../layouts/MainLayout";
import HeroPage from "../HeroPage/HeroPage";
import Footer from "../FooterPage/FooterPage";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <MainLayout>
      <HeroPage />
      <div className={style.filterSection}>
        <h4 className={style.titleFilter}>Search By: </h4>
        <div className={style.filterContainer}>
          <button
            className={style.filterButton}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </button>
          <button
            className={style.filterButton}
            onClick={() => handleCategoryChange("electronics")}
          >
            Electronics
          </button>
          <button
            className={style.filterButton}
            onClick={() => handleCategoryChange("jewelery")}
          >
            Jewelry
          </button>
          <button
            className={style.filterButton}
            onClick={() => handleCategoryChange("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className={style.filterButton}
            onClick={() => handleCategoryChange("women's clothing")}
          >
            Women's Clothing
          </button>
        </div>
      </div>
      <main className={style.gridContainer}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </main>
      {/* <Footer /> */}
    </MainLayout>
  );
}

export default HomePage;
