import { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);

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

  return data;
};

export default DataFetcher;
