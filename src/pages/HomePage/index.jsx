import { useEffect, useState } from "react";
import style from "./HomePage.module.css";
import api from "../../api";
import ProductCard from "../../components/ProductCard";
import MainLayout from "../../layouts/MainLayout";
import HeroPage from "../HeroPage/HeroPage";
// import Footer from "../FooterPage/FooterPage";
function HomePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
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
      <main
        className={style.gridContainer}
        style={{ margin: "10px 10px" }}
        id="produk"
      >
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} data={product} />;
          })}
      </main>
      <div
        id="about"
        style={{
          height: "30vh",
          backgroundColor: "burlywood",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>{`Poros Final Project`}</h1>
        <div
          style={{
            marginTop: "40px",
            flexDirection: "row",
            display: "flex",
            gap: "40px",
          }}
        >
          <h4>Mohammad Rifqi Hidayat - 235150607111030</h4>
          <h4>Risqi Achmad Fahreal - 235150201111048</h4>
          <h4>Putu Indah Githa Cahyani - 235150200111041 </h4>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
