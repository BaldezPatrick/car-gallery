import React from "react";
import styles from "../../public/css/CarList.module.css";

interface NavigationButtonsProps {
  handlePrevCar: () => void;
  handleNextCar: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  handlePrevCar,
  handleNextCar,
}) => {
  return (
    <div className={styles.listMoveBtn}>
      <div className={styles.listMoveBtnItem} onClick={handlePrevCar}>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <circle
            cx="20"
            cy="20"
            r="18.5"
            fill="white"
            stroke="#333"
            strokeWidth="1"
          ></circle>
          <rect
            x="24.9141"
            y="20.3457"
            width="10.4911"
            height="0.5"
            rx="0.25"
            transform="rotate(-135 24.9141 20.3457)"
            fill="none"
            stroke="#333"
            strokeWidth="1"
          ></rect>
          <rect
            x="17.4942"
            y="27.0703"
            width="10.4758"
            height="0.5"
            rx="0.25"
            transform="rotate(-45 17.4942 27.0703)"
            fill="none"
            stroke="#333"
            strokeWidth="1"
          ></rect>
        </svg>
      </div>
      <div className={styles.listMoveBtnItem} onClick={handleNextCar}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18.5"
            fill="white"
            stroke="#333"
            strokeWidth="1"
          ></circle>
          <rect
            x="24.9141"
            y="20.3457"
            width="10.4911"
            height="0.5"
            rx="0.25"
            transform="rotate(-135 24.9141 20.3457)"
            fill="none"
            stroke="#333"
            strokeWidth="1"
          ></rect>
          <rect
            x="17.4942"
            y="27.0703"
            width="10.4758"
            height="0.5"
            rx="0.25"
            transform="rotate(-45 17.4942 27.0703)"
            fill="none"
            stroke="#333"
            strokeWidth="1"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default NavigationButtons;
