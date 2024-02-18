import React, { useState } from "react";
import Header from "./Header";
import styles from "../modules/Register.module.scss";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let valid = true;

    if (formData.username.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        username: "Username is required",
      }));
      valid = false;
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email format",
      }));
      valid = false;
    }

    if (formData.password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters long",
      }));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", formData);

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.header}>
        <Header />
      </div>
      <h1>Welcome to Mastercard.</h1>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Register</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
          <button type="submit" className={styles.button}>
            REGISTER
          </button>
          <p className={styles["already"]}>Already a user at Mastercard? </p>
          <Link to={"/login"}>
            <p className={styles["login"]}>Log in</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
