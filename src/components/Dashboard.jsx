import React from "react";
import styles from "../modules/Dashboard.module.scss";
import { Link } from "react-router-dom";
const Dashboard = ({ userData }) => {
  return (
    <>
      <h2 className={styles["dashboard-title"]}>About You</h2>
      <div className={styles["dashboard-container"]}>
        <h1 className={styles["dashboard-greeting"]}>Hello, {userData.name}</h1>
        <h1 className={styles["dashboard-greeting"]}>
          You set your email as {userData.email}
        </h1>
        <Link to={"/"}>
          <button className={styles.button}>Log Out</button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
