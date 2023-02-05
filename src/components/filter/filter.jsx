import React from "react";
import styles from "./filter.module.css";

const FilterButton = ({ data, setData }) => {
  const handleFilterSize = () => {
    const filteredData = data.filter(({ area }) => area < 65300);
    setData(filteredData);
  };

  const handleFilterRegion = () => {
    const filteredData = data.filter(({ region }) => region === "Oceania");
    setData(filteredData);
  };

  const handleShowAll = () => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  };

  return (
    <div className={styles.filter}>
      <h2>Filter by:</h2>
      <button onClick={handleFilterSize}>size</button>
      <button onClick={handleFilterRegion}>region</button>
      <span>&#8725;</span>
      <button onClick={handleShowAll}>reset</button>
    </div>
  );
};

export default FilterButton;
