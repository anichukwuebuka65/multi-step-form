import React, { useState } from "react";
import { useGetContext } from "../components/context/Context";
import Header from "../components/Header";
import Plan from "../components/Plan";
import styles from "./Plans.module.scss";
import { usePlans } from "../functions/data";

const heading = "Select Plans";
const paragraph = "You have the option of monthly or yearly billing";

export default function SelectPlans() {
  const [inputFocused, setInputFocused] = useState(false);
  const {
    plans,
    data: { billDuration },
    setData,
  } = usePlans();

  const PlansComponent = plans.map(({ image, plan, price }) => (
    <Plan key={plan} {...{ image, plan, price }} />
  ));
  const handleChange = () => {
    setData((prev) => ({
      ...prev,
      billDuration: prev.billDuration === "monthly" ? "yearly" : "monthly",
    }));
  };
  return (
    <>
      <Header {...{ heading, paragraph }} />

      <div className={styles.container}>{PlansComponent}</div>

      <div className={styles.btn_wrapper}>
        <p>monthly</p>
        <div className={styles.toggle_btn}>
          <label
            htmlFor="duration"
            className={`${styles.label} ${inputFocused ? styles.focus : ""}`}
          ></label>
          <input
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            onChange={handleChange}
            className={styles.checkbox}
            type="checkbox"
            id="duration"
            checked={billDuration === "yearly"}
          />
          <span className={styles.translate}></span>
        </div>
        <p htmlFor="yearly">yearly</p>
      </div>
    </>
  );
}
