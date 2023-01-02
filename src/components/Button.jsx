import React from "react";
import { purplish, marine, next } from "./Button.module.scss";

export default function Button({ submit, nextPage, step }) {
  function getValue(first, second) {
    return step == 4 ? first : second; //returns the correct handler or the correct classname depending on which button is being rended
  }

  return (
    <a
      href={step}
      onClick={getValue(submit, nextPage)}
      className={`${next} ${getValue(purplish, marine)}`}
    >
      {getValue("Confirm", "NextPage")}
    </a>
  );
}
