import React from "react";
import styles from "./DropdownElement.module.scss";

const DropdownElement = ({ text, onClick }) => (
  <li className={styles.DropdownElement} onClick={() => onClick()}>
    {text}
  </li>
);

DropdownElement.defaultProps = {
  onClick: function () {},
};
export default DropdownElement;
