import React from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({color, progress , time}) => {
  
  return <div>
      <div className={styles.progressBar}>
       <div className={styles.innerBar} style={{backgroundColor:color, height:`${progress}%`}}></div>
    </div>
    <p className={styles.percentage}>
      {progress} {time}
    </p>
  </div>
}


ProgressBar.defaultProps = {
  color:'#198CD9',
  progress:40,
  time:'Jours'
};

export default ProgressBar;
