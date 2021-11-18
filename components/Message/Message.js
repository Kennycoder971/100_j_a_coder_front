import React from "react";
import styles from "./Message.module.scss";
import Image from "next/dist/client/image";

const Message = ({ userClass }) => (
  <li className={`${styles.Message}`}>
    <span className={userClass}>lo</span>
  </li>
);

export default Message;
