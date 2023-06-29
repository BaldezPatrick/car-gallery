import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import styles from "../public/css/Learn.module.css";
import { useRouter } from "next/router";

const Learn: React.FC = () => {
  const router = useRouter();
  const { carData, setCar } = useContext(CarContext);

  const handleCarClick = (page: string, id: string) => {
    setCar({
      modelName: carData.modelName,
      bodyType: carData.bodyType,
      modelType: carData.modelType,
      imageUrl: carData.imageUrl,
    });

    if (page === "learn") {
      router.push(`/learn/${carData.id}`);
    } else if (page === "shop") {
      router.push(`/shop/${carData.id}`);
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      {carData && (
        <>
          <h1>Learn about {carData.bodyType}</h1>
          <p>
            The {carData.modelName} is a car suitable for all audiences and
            affordable in its prices.
          </p>
          <p>
            You can purchase it in various ways such as credit, cash, or
            financing. It's up to your discretion.
          </p>
          <p>Don't miss this opportunity!</p>
          <p>
            The {carData.modelName} is a car suitable for all audiences and
            affordable in its prices.
          </p>
          <img src={carData.imageUrl} alt={carData.modelName} />
          <p>
            You can purchase it in various ways such as credit, cash, or
            financing. It's up to your discretion.
          </p>
          <p>Don't miss this opportunity!</p>

          <button className={styles.backButton} onClick={handleBack}>
            Back
          </button>
          <button
            className={styles.buyButton}
            onClick={() => handleCarClick("shop", carData.id)}
          >
            Buy
          </button>
        </>
      )}
    </div>
  );
};

export default Learn;
