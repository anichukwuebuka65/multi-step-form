import UseFocus from "../functions/UseFocus";
import { useGetContext } from "./context/Context";
import styles from "./Plan.module.scss";

function Plans({ image, plan, price }) {
  const {
    data: { selectedPlan, billDuration },
    setData,
  } = useGetContext();
  const focusRef = UseFocus(plan, "Arcade");

  return (
    <div
      {...focusRef}
      tabIndex={0}
      onClick={(e) => setData((prev) => ({ ...prev, selectedPlan: plan }))}
      className={`${styles.container} ${
        plan == selectedPlan ? styles.selected : ""
      }`}
    >
      <img className={styles.img} src={image} alt={plan} />
      <div className={styles.wrapper}>
        <p className={styles.plan}>{plan}</p>
        <p className={styles.price}>{price}</p>
        {billDuration === "yearly" ? (
          <p className={styles.bonus}>2 months free</p>
        ) : null}
      </div>
    </div>
  );
}

export default Plans;
