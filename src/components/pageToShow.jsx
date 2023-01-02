import AddOns from "../page_components/AddOns";
import FinishingUp from "../page_components/FinishingUp";
import Plans from "../page_components/Plans";
import ThankYou from "../page_components/ThankYou";

export default function PageToShow({ step, setStep, children }) {
  switch (step) {
    case 1:
      return <>{children}</>;
    case 2:
      return <Plans />;
    case 3:
      return <AddOns />;
    case 4:
      return <FinishingUp setStep={setStep} />;
    case 5:
      return <ThankYou />;
    default:
      return null;
  }
}
