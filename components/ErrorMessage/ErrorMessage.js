import React from "react";
import styles from "./ErrorMessage.module.scss";
/**
 * Small component to place under inputs for client side validation
 * @param  {String} {message}
 */

const ErrorMessage = ({ message }) => (
  <small className={styles.ErrorMessage}>{message}</small>
);

ErrorMessage.defaultProps = {
  message: "Une erreur est survenue.",
};

export default ErrorMessage;
