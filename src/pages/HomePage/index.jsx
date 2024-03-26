import { useEffect, useState } from "react";
import style from "./HomePage.module.css";
import api from "../../api";
import ProductCard from "../../components/ProductCard";
import MainLayout from "../../layouts/MainLayout";
import HeroPage from "../HeroPage/HeroPage";
// import Footer from "../FooterPage/FooterPage";
function HomePage() {
  const [products, setProducts] = useState([]);

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

  return (
    <MainLayout>
      <HeroPage />
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
