import { useGetContext } from "../components/context/Context";

const initialValues = {
  name: "",
  email: "",
  number: "",
  billDuration: "monthly",
  selectedPlan: "Arcade",
  addOns: {
    onlineService: true,
    largerStorage: true,
    customizableProfile: false,
  },
};

function usePlans() {
  const { data, setData } = useGetContext();
  const { billDuration } = data;

  const getPrice = (monthly) =>
    billDuration == "monthly" ? `$${monthly}/mo` : `$${monthly * 10}/yr`;

  const plans = [
    { image: "/images/icon-arcade.svg", plan: "Arcade", price: getPrice(9) },
    {
      image: "/images/icon-advanced.svg",
      plan: "Advanced",
      price: getPrice(12),
    },
    { image: "/images/icon-pro.svg", plan: "Pro", price: getPrice(15) },
  ];

  const addOnValues = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: getPrice(1),
      addOn: "onlineService",
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of storage",
      price: getPrice(2),
      addOn: "largerStorage",
    },
    {
      title: "Customizable profile",
      description: "Custome theme on your profile",
      price: getPrice(2),
      addOn: "customizableProfile",
    },
  ];

  return { plans, addOnValues, data, setData };
}

export { usePlans };

export default initialValues;
