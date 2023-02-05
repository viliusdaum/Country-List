import SortButton from "../sort/sort";
import React, { useState, useEffect } from "react";
import FilterButton from "../filter/filter";
import Pagination from "../pagination/pagination";
import styles from "./table.module.css";

const List = () => {
  const [data, setData] = useState([]);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.menu}>
        <SortButton data={data} setData={setData} />
        <FilterButton data={data} setData={setData} />
      </div>
      <Pagination data={data} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default List;
