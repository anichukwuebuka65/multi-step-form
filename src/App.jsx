import { useState } from "react";
import validate from "./functions/validate";
import Nav_item from "./components/nav_item";
import PageToShow from "./components/pageToShow";
import {
  wrapper,
  app,
  nav_list,
  container,
  container_body,
  btn_wrapper,
  previous,
  hidePrev,
} from "./App.module.scss";
import Button from "./components/Button";
import { useGetContext } from "./components/context/Context";
import Info from "./page_components/Info";

export default function App() {
  const [step, setStep] = useState(1);
  const { data } = useGetContext();
  const [err, setErr] = useState({
    nameError: "",
    emailError: "",
    numberError: "",
  });

  const navItems = new Array(4).fill("").map((u, index) => {
    return <Nav_item key={index} page={index + 1} step={step} />;
  });

  const button =
    step !== 5 ? (
      <>
        <a
          href="#"
          onClick={() => prevPage(setStep)}
          className={`${previous} ${step === 1 ? hidePrev : ""}`}
        >
          Go Back
        </a>
        <Button
          {...{
            submit: closure(submit),
            nextPage: closure(nextPage),
            step,
          }}
        />
      </>
    ) : null;

  function closure(fn) {
    return (e) => {
      e.preventDefault();
      fn(setStep, data, setErr);
    };
  }

  function submit(setStep) {
    //submit to api and display thank you page
    console.log(data);
    setStep(5);
  }

  return (
    <div className={wrapper}>
      <div className={app}>
        <nav>
          <ul className={nav_list}>{navItems}</ul>
        </nav>
        <main className={container}>
          <div className={container_body}>
            <PageToShow step={step} setStep={setStep}>
              <Info err={err} setErr={setErr} />
            </PageToShow>
          </div>
          <div className={btn_wrapper}>{button}</div>
        </main>
      </div>
    </div>
  );
}

function nextPage(setStep, data, setErr) {
  if (!validate(data, setErr)) return;
  setStep((prev) => {
    if (prev === 5) return;
    return prev + 1;
  });
}

function prevPage(setStep) {
  setStep((prev) => {
    if (prev === 1) return;
    return prev - 1;
  });
}
//export default App;
