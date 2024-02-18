import React from "react";
import styles from "../modules/Header.module.scss";
import mainLogo from "../assets/master-logo.png";
import { Link } from "react-router-dom";

const Header = ({ loggedInUser }) => {
  return (
    <div className={styles["container"]}>
      <header className={styles["header"]}>
        <Link to={"/"}>
          <img
            className={styles["logo"]}
            src={mainLogo}
            alt="Mastercard Logo"
          />
        </Link>

        <div className={styles["actions"]}>
          {loggedInUser ? (
            <>
              <Link to={"/dashboard"}>
                <button className={styles["button"]}>DASHBOARD</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className={styles["button"]}>LOGIN</button>
              </Link>
              <Link to={"/register"}>
                <button className={styles["button"]}>REGISTER</button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
