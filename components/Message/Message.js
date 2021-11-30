import React from "react";
import styles from "./Message.module.scss";

const Message = ({ userClass }) => (
  <li className={`${styles.Message}`}>
    <span className={userClass}>lorem</span>
  </li>
);

export default Message;
