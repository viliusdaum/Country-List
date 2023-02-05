import React from "react";
import styles from "./ListItem.module.css";

const ListItem = ({ name, region, area }) => (
  <li className={styles.item}>
    <p className={styles.name}>Name: {name}</p>
    <p className={styles.region}>Region: {region}</p>
    <p className={styles.area}>Area Size: {area}</p>
    <hr />
  </li>
);

export default ListItem;
