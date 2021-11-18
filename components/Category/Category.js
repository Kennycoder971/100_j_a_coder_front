import React from 'react';
import styles from './Category.module.scss';

const Category = ({text}) => (
  <span className={styles.Category}>
    {text}
  </span>
);


export default Category;
