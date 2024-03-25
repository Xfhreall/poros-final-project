import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

function ProductCard(props) {
  const { image, title, price, id } = props.data;

  return (
    <Link
      to={`product/${id}`}
      className={style.card}
      style={{ marginTop: "2vh" }}
    >
      <div className={style.imageContainer}>
        <img src={image} className={style.image} />
      </div>
      <div className={style.desc}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.bottom}>
          <p className={style.price}>${price}</p>
          <a href="" class={style.button}>
            Add to cart
          </a>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
