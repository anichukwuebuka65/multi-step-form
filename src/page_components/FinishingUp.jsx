import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import { usePlans } from "../functions/data";
import styles from "./FinishingUp.module.scss";

const heading = "Finishing Up";
const paragraph = "Double-check everything looks OK before confirming";

export default function FinishingUp({ setStep }) {
  const {
    plans,
    addOnValues,
    data: { addOns, selectedPlan, billDuration },
  } = usePlans();
  const [prizes, setPrizes] = useState([0]);
  const [selectedPlanPrice, setSelectedPlanPrize] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  useEffect(() => {
    const values = addOnValues.filter((addon) => addOns[addon.addOn] == true);
    const planPrice = plans.find((item) => item.plan === selectedPlan).price;
    setPrizes((prev) => [
      ...prev,
      convertToNum(planPrice),
      ...values.map((item) => convertToNum(item.price)),
    ]);
    setSelectedAddOns(values);
    setSelectedPlanPrize(planPrice);
  }, []);

  return (
    <>
      <Header {...{ heading, paragraph }} />
      <section>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div>
              <p className={styles.plan}>
                {selectedPlan}({billDuration})
              </p>
              <a onClick={() => setStep(2)}>Change</a>
            </div>
            <p className={styles.plan}>{selectedPlanPrice}</p>
          </div>
          {selectedAddOns.map((item) => {
            return (
              <div
                className={`${styles.wrapper} ${styles.margintop}`}
                key={item.title}
              >
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.total}>
          <p>Total(per {billDuration.slice(0, -2)})</p>
          <p>
            ${prizes.reduce((a, b) => a + b)}/
            {billDuration == "monthly" ? "mo" : "yr"}
          </p>
        </div>
      </section>
    </>
  );
}

function convertToNum(price) {
  return parseInt(price.slice(1).slice(0, -3));
}
