import React from "react";
import Card from "./UI/Card";
import styles from "./Main.module.scss";

const Main = ({ statistics }) => {
  return (
    <Card>
      <h2 className={styles.title}>Coronavirus disease statistics</h2>
      <div className={styles.info}>
        <div>Country: {statistics.Country}</div>
        <div>Confirmed cases: {statistics.Confirmed}</div>
        <div>Deaths: {statistics.Deaths}</div>
      </div>
    </Card>
  );
};

export default Main;
