import React from "react";
import UseFocus from "../functions/UseFocus";
import styles from "./AddOn.module.scss";
import { useGetContext } from "./context/Context";

function AddOn({ value }) {
  const { title, description, price, addOn } = value;
  const { data, setData } = useGetContext();
  const focusRef = UseFocus(title, "Online service");

  return (
    <div
      className={`${styles.container} ${
        data.addOns[addOn] ? styles.selected : ""
      }`}
    >
      <label htmlFor="box">
        <input
          {...focusRef}
          onChange={() =>
            setData((prev) => ({
              ...prev,
              addOns: { ...prev.addOns, [addOn]: !prev.addOns[addOn] },
            }))
          }
          type="checkbox"
          id="box"
          checked={data.addOns[addOn]}
        ></input>
      </label>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <p>{price}</p>
    </div>
  );
}

export default AddOn;
