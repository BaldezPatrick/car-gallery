import React from "react";
import styles from "../../public/css/CarList.module.css";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

interface MobileDotsProps {
  filteredCars: Car[];
  activeDotIndex: number;
  handleDotClick: (index: number) => void;
}

const MobileDots: React.FC<MobileDotsProps> = ({
  filteredCars,
  activeDotIndex,
  handleDotClick,
}) => {
  return (
    <div className={styles.mobileDotsContainer}>
      {filteredCars.map((_, index) => (
        <div
          key={index}
          className={`${styles.mobileDot} ${
            index === activeDotIndex ? styles.activeDot : ""
          }`}
          onClick={() => {
            handleDotClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default MobileDots;
