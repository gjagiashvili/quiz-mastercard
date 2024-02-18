import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";
import styles from "../modules/Login.module.scss";

const Login = ({ setLoggedInUser }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [foundUser, setFoundUser] = useState(null);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let valid = true;

    if (loginData.email.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        email: "Email is required",
      }));
      valid = false;
    }

    if (loginData.password.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required",
      }));
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
          const user = users.find(
            (user) =>
              user.email === loginData.email &&
              user.username === loginData.password
          );
          if (user) {
            // console.log("Login");
            setLoggedInUser(user);
            setFoundUser(user);
          }
        });
    }
  };

  return (
    <>
      <Header />
      {!foundUser && (
        <div>
          <div className={styles["text"]}>
            <h1 className={styles["main-text"]}>Priceless To Me</h1>
            <p className={styles["under-text"]}>
              We're happy to see you - a Mastercard member here. Fill the forms
              below to log in successfully
            </p>
          </div>
          <div className={styles["container"]}>
            <div className={styles["login-container"]}>
              <h2>Login</h2>
              <form onSubmit={handleSubmit} className={styles["form"]}>
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Type your email..."
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Type your password..."
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password}</p>
                )}

                <button type="submit" className={styles.button}>
                  Login
                </button>
              </form>

              <p>
                Not registered yet?
                <Link to="/register" className={styles.registerLink}>
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {foundUser && <Dashboard userData={foundUser} />}
    </>
  );
};

export default Login;
