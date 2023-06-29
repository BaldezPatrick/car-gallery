import React from "react";
import styles from "../../public/css/CarFilter.module.css";

interface CarFilterProps {
  filter: string;
  onFilterChange: (selectedFilter: string) => void;
}

const CarFilter: React.FC<CarFilterProps> = ({ filter, onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="filter" className={styles.carFilterLabel}>
        Filter by Body Type:
      </label>
      <select
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        className={styles.carFilterSelect}
      >
        <option value="">All</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="estate">Estate</option>
      </select>
    </div>
  );
};

export default CarFilter;
