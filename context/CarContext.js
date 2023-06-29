import React, { createContext, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState(null);

  const setCar = (data) => {
    setCarData(data);
  };

  return (
    <CarContext.Provider value={{ carData, setCar }}>
      {children}
    </CarContext.Provider>
  );
};
