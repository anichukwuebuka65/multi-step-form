import React from "react";
import AddOn from "../components/AddOn";
import Header from "../components/Header";
import { usePlans } from "../functions/data";
import styles from "./AddOns.module.scss";

function AddOns() {
  const { addOnValues } = usePlans();

  const heading = "Pick add-ons";
  const paragraph = "Add-ons help enhanced your gaming experience";

  return (
    <>
      <Header {...{ heading, paragraph }} />
      <div className={styles.container}>
        {addOnValues.map((value) => (
          <AddOn key={value.title} value={value} />
        ))}
      </div>
    </>
  );
}

export default AddOns;
