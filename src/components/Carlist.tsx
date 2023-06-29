import React, { useEffect, useRef, useState } from "react";
import styles from "../../public/css/CarList.module.css";
import { useMediaQuery } from "react-responsive";
import CarCard from "./CarCard";
import NavigationButtons from "./NavigationButtons";
import MobileDots from "./MobileDots";
import CarFilter from "./CarFilter";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const visibleCars = 4;

  useEffect(() => {
    if (isMobile) {
      setCurrentCarIndex(0);
      setActiveDotIndex(0);
    }
  }, [isMobile]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/cars");
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.error("Erro ao tentar consumir API: ", error);
      }
    };
    fetchData();
  }, []);

  const handleNextCarGroup = () => {
    if (currentCarIndex + calculateVisibleCars() >= filteredCars.length) {
      return;
    }

    setCurrentCarIndex((prevIndex) => prevIndex + calculateVisibleCars());

    if (cardRef.current) {
      cardRef.current.scrollLeft +=
        cardRef.current.clientWidth * calculateVisibleCars();
      cardRef.current.nextElementSibling?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handlePrevCarGroup = () => {
    if (currentCarIndex === 0) {
      return;
    }
    setCurrentCarIndex((prevIndex) =>
      Math.max(0, prevIndex - calculateVisibleCars())
    );
    const previousIndex = Math.max(0, currentCarIndex - calculateVisibleCars());
    const previousElement = cardRef.current?.children[
      previousIndex
    ] as HTMLElement;
    const previousRect = previousElement?.getBoundingClientRect();
    const cardRect = cardRef.current?.getBoundingClientRect();
    const previousLeft = previousRect?.left;
    const cardLeft = cardRect?.left ?? 0;
    const scrollLeft = previousLeft ? cardLeft - cardLeft : 0;
    if (cardRef.current) {
      cardRef.current.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentCarIndex(index);
    setActiveDotIndex(index);

    if (cardRef.current && cardRef.current.children[index]) {
      const childElement = cardRef.current.children[index] as HTMLElement;
      const { left: childLeft } = childElement.getBoundingClientRect();
      const { left: cardLeft } = cardRef.current.getBoundingClientRect();

      cardRef.current.scrollLeft = childLeft - cardLeft;
    }
  };

  const calculateVisibleCars = () => {
    if (isMobile) {
      const windowWidth = window.innerWidth;
      const cardWidth = cardRef.current?.clientWidth || 0;
      const visibleCarsCount = Math.max(1, Math.floor(windowWidth / cardWidth));
      return visibleCarsCount;
    }

    return visibleCars;
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 0 && touchDiff > 50) {
      handlePrevCarGroup();
    } else if (touchDiff < 0 && Math.abs(touchDiff) > 50) {
      handleNextCarGroup();
    }
  };

  const handleFilterChange = (selectedFilter: string) => {
    setSelectedFilter(selectedFilter);
    setCurrentCarIndex(0);
    setActiveDotIndex(0);
  };

  const filteredCars = selectedFilter
    ? cars.filter((car) => car.bodyType === selectedFilter)
    : cars;

  return (
    <section className={styles.container}>
      <CarFilter filter={selectedFilter} onFilterChange={handleFilterChange} />
      {filteredCars.length > 0 ? (
        <div
          className={styles.carCard}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={cardRef}
        >
          {filteredCars
            .slice(currentCarIndex, currentCarIndex + calculateVisibleCars())
            .map((car, index) => (
              <CarCard
                key={car.id}
                car={car}
                isActive={index === currentCarIndex}
              />
            ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {!isMobile && (
        <NavigationButtons
          handlePrevCar={handlePrevCarGroup}
          handleNextCar={handleNextCarGroup}
        />
      )}
      {isMobile && (
        <MobileDots
          filteredCars={filteredCars}
          activeDotIndex={activeDotIndex}
          handleDotClick={handleDotClick}
        />
      )}
    </section>
  );
};
