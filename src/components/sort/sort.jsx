import React, { useState } from "react";
import styles from "./sort.module.css";

const SortButton = ({ data, setData }) => {
  const [sortOption, setSortOption] = useState("asc");

  const handleSort = () => {
    if (sortOption === "asc") {
      setSortOption("desc");
      setData([...data].sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else {
      setSortOption("asc");
      setData([...data].sort((a, b) => (a.name < b.name ? 1 : -1)));
    }
  };

  return (
    <div className={styles.sort}>
      <button className={styles.button} onClick={handleSort}>
        A-Z ({sortOption})
      </button>
    </div>
  );
};

export default SortButton;
