import React, { useContext } from "react";
import Link from "next/link";
import styles from "../../public/css/CarList.module.css";
import { useRouter } from "next/router";
import { CarContext } from "../../context/CarContext";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

interface CarCardProps {
  car: Car;
  isActive: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, isActive }) => {
  const router = useRouter();
  const { setCar } = useContext(CarContext);

  const handleCarClick = (page: string) => {
    setCar({
      modelName: car.modelName,
      bodyType: car.bodyType,
      modelType: car.modelType,
      imageUrl: car.imageUrl,
    });

    if (page === "learn") {
      router.push(`/learn/${car.id}`);
    } else if (page === "shop") {
      router.push(`/shop/${car.id}`);
    }
  };

  return (
    <div className={styles.cardContainer} key={car.id}>
      <h3>{car.bodyType}</h3>
      <div className={styles.cardParagh}>
        <p>{car.modelName}</p>
        <p>{car.modelType}</p>
      </div>
      <img src={car.imageUrl} alt={car.modelName} />
      <div className={styles.linkPages}>
        <button onClick={() => handleCarClick("learn")}>
          <Link href={`learn/${car.id}`}>Learn</Link>
        </button>
        <div>
          <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 1.5l4 4-4 4"
              fill="none"
              stroke="#1c6bba"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <button onClick={() => handleCarClick("shop")}>
          <Link href={`/shop/${car.id}`}>Shop</Link>
        </button>
        <div>
          <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 1.5l4 4-4 4"
              fill="none"
              stroke="#1c6bba"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
