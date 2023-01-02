import React from "react";
import styles from "./Header.module.scss";

function Header({ heading, paragraph }) {
  return (
    <>
      <h1 className={styles.header}>{heading}</h1>
      <p className={styles.paragraph}>{paragraph}</p>
    </>
  );
}

export default Header;
