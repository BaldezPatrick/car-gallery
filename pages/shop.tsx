import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import styles from "../public/css/Shop.module.css";
import { useRouter } from "next/router";

const Shop: React.FC = () => {
  const router = useRouter();
  const { carData } = useContext(CarContext);

  const handleCancelPurchase = () => {
    router.push("/");
  };

  return (
    <section className={styles.container}>
      {carData && (
        <>
          <h1 className={styles.title}>
            You're almost there to buy your {carData.bodyType}
          </h1>
          <p className={styles.price}>
            <span>Price:</span>
            <strong>$110.000</strong>
          </p>
          <p className={styles.price}>
            <span>Name:</span>
            <p>{carData.modelName}</p>
          </p>
          <p className={styles.price}>
            <span>Model:</span>
            <p>{carData.modelType}</p>
          </p>

          <button className={styles.button}>Purchase</button>

          <button
            className={styles.cancelButton}
            onClick={handleCancelPurchase}
          >
            Cancel
          </button>
        </>
      )}
    </section>
  );
};

export default Shop;
