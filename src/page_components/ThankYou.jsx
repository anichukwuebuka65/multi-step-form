import React from "react";
import styles from "./ThankYou.module.scss";

export default function ThankYou() {
  return (
    <div className={styles.container}>
      <img src="./images/icon-thank-you.svg" alt="thank you" />
      <h1>Thank you!</h1>
      <p>
        Thanks for comfirming your suscription!. We hope you have fun using our
        platform.If you ever need support, pls feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
