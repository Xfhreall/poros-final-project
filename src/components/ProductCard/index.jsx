import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import GlobalContext from "../../context/GlobalContext";
import { useContext } from "react";

function ProductCard(props) {
  const { image, title, price, id } = props.data;
  const { cartProducts, setCartProducts } = useContext(GlobalContext);

  const addToCart = () => {
    setCartProducts((prev) => [...prev, props.data]);
    alert(`${title} telah ditambahkan di keranjang`);
  };

  return (
    <section className={style.card} style={{ marginTop: "2vh" }}>
      <Link className={style.imageContainer} to={`product/${id}`}>
        <img src={image} className={style.image} />
      </Link>
      <div className={style.desc}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.bottom}>
          <p className={style.price} s>
            ${price}
          </p>
          <button onClick={addToCart} class={style.button}>
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
