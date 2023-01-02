import React from "react";
import { nav_item, link, selected } from "./nav_item.module.scss";

function Nav_item({ page, step }) {
  return (
    <li
      className={`${nav_item} ${
        step == page || (page == 4 && step > 4) ? selected : ""
      }`}
    >
      {page}
    </li>
  );
}

export default Nav_item;
