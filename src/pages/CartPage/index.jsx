import { useContext, useRef } from "react";
import MainLayout from "../../layouts/MainLayout";
import GlobalContext from "../../context/GlobalContext";
import styles from "./Cart.module.css";

const CartPage = () => {
  const { cartProducts, setCartProducts } = useContext(GlobalContext);
  const productQuantityRef = useRef({});

  const handleRemoveFromCart = (productId) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((product) => product.id !== productId)
    );
  };

  const calculateTotalPrice = () => {
    if (cartProducts.length === 0) {
      return 0;
    }

    return cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(productId);
    } else {
      setCartProducts((prevCartProducts) =>
        prevCartProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: newQuantity }
            : product
        )
      );
      productQuantityRef.current[productId] = newQuantity;
    }
  };

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Shopping Bag</h1>
          <div className={styles.bottom}>
            <div className={styles.info}>
              {cartProducts.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div className={styles.productDetail}>
                    <div className={styles.imageFrame}>
                      <img
                        src={product.image}
                        className={styles.image}
                        alt={product.title}
                      />
                    </div>
                    <div className={styles.productDetail}>
                      <span className={styles.productName}>
                        <b>Product:</b> {product.title}
                      </span>
                      <span className={styles.productId}>
                        <b>ID:</b> {product.id}
                      </span>
                      <div
                        className={styles.productColor}
                        style={{ backgroundColor: product.color }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.priceDetail}>
                    <div className={styles.productAmountContainer}>
                      <button
                        className={styles.productAmountButton}
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <div className={styles.productAmount}>
                        {product.quantity}
                      </div>
                      <button
                        className={styles.productAmountButton}
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className={styles.productPrice}>
                      ${product.price * product.quantity}
                    </div>
                    <button
                      className={styles.cartButton}
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.summary}>
              <h2 className={styles.sectionTitle}>Order Summary</h2>
              <div className={styles.summaryItem}>
                <span className={styles.summaryItemText}>Subtotal</span>
                <span className={styles.summaryItemPrice}>
                  ${parseFloat(calculateTotalPrice()).toFixed(2)}
                </span>
              </div>
              <button className={styles.button}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
