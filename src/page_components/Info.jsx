import { useGetContext } from "../components/context/Context";
import Header from "../components/Header";
import { container } from "./Info.module.scss";

function Info({ err, setErr }) {
  const { data, setData } = useGetContext();
  const heading = "Personal Info";
  const paragraph = "Please provide your name, email, address and phone number";

  function handleAction(value) {
    const error = `${value}Error`;

    return {
      value: data[value],
      onChange: (e) => {
        setErr((prev) => ({ ...prev, [error]: "" }));
        setData((prev) => ({ ...prev, [value]: e.target.value }));
      },
    };
  }

  return (
    <div className={container}>
      <Header {...{ heading, paragraph }} />
      <label htmlFor="name">
        Name {err.nameError ? <span>{err.nameError}</span> : ""}
      </label>
      <input
        {...handleAction("name")}
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
      />
      <label htmlFor="email">
        Email Address {err.emailError ? <span>{err.emailError}</span> : ""}
      </label>
      <input
        {...handleAction("email")}
        type="e-mail"
        id="name"
        placeholder="e.g. stephenking@lorem.com"
      />
      <label htmlFor="phone number">
        Phone Number {err.numberError ? <span>{err.numberError}</span> : ""}
      </label>
      <input
        {...handleAction("number")}
        type="text"
        id="phone number"
        placeholder="e.g. +1 234 567 690"
      />
    </div>
  );
}

export default Info;
