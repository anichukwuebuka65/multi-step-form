import React, { useEffect, useRef } from "react";

export default function UseFocus(item, value) {
  const ref = useRef();

  const focusRef = item == value ? { ref } : {};

  useEffect(() => {
    console.log(item);
    item == value && ref.current.focus();
  }, [ref.current]);

  return focusRef;
}
