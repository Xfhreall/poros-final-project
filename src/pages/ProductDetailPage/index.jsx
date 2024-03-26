import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../api";
import MainLayout from "../../layouts/MainLayout";
import GlobalContext from "../../context/GlobalContext";
import style from "./ProductDetailPage.module.css";

function PostDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState();

  const { cartProducts, setCartProducts } = useContext(GlobalContext);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await api.get(`products/${params.id}`);
        setProduct(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getProductDetail();
  }, [params.id]);

  const addToCart = () => {
    setCartProducts((prev) => [...prev, product]);
  };

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px",
        }}
      >
        {product && (
          <section className={style.card} style={{ margin: "2vh" }}>
            <div className={style.imageContainer}>
              <img src={product.image} className={style.image} />
            </div>
            <div>
              <div className={style.desc}>
                <h2 className={style.title}>{product.title}</h2>
                <p style={{ marginTop: "70px", lineHeight: "2" }}>
                  {product.description}
                </p>
                <div className={style.bottom}>
                  <p className={style.price} s>
                    ${product.price}
                  </p>
                  <button onClick={addToCart} class={style.button}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </MainLayout>
  );
}

export default PostDetailPage;
