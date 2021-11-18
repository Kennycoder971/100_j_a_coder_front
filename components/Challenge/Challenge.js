import React from 'react';
import {AiFillHeart} from 'react-icons/ai'
import styles from './Challenge.module.scss';
import Comment from '../Comment/Comment';
import Category from '../Category/Category';
import Image from 'next/dist/client/image';

const Challenge = () => (
  <div className={styles.Challenge}>
    <div className={styles.challengeInfo}>
      <div className={styles.userPhoto}>
        <Image width={60} height={60} src="/images/user-profile/no-image.png" alt="Fond d'écran." />
      </div>
      <div className={styles.challengeContent}>
        <div className={styles.challengeTime}>
          <div className={styles.startedAt}>
            <h4 className={styles.username}>
             Jean-Claude
            </h4>
            <span> a commencé son défi il y a 2 jours</span>
          </div>
          <div className={styles.timeLikes}>
            <h4 className={styles.remainingTime}>Temps restant: 20j 2h 1m 03s</h4>
            <div className={styles.likes}>
             <AiFillHeart/> 2
            </div>
          </div>
        </div>

        <h3 className={styles.challengeTitle}>Défi: Atteindre un bon niveau sur html, css et javascript.</h3>
        <div className={styles.timeADay}>Pendant 3 heures pas jours</div>
        <h3 className={styles.techologiesTitle}>Technologies:</h3>
        <div className={styles.techologies}>
          <Category text='html' />
          <Category text='javascript' />
          <Category text='css' />
        </div>
      </div>
    </div>
    <div className={styles.challengeComments}>
        <Comment/>
        <Comment/>
    </div>
    <div className={`${styles.challengeInput}`} >
       <Image width={40} height={40} src="/images/user-profile/no-image.png" alt="Fond d'écran." />
        <form>
          <input type="text" name="comment" placeholder='Écrivez un commentaire.' id="comment-input" className='blue-input' />
        </form>
    </div>
  </div>
);


Challenge.defaultProps = {};

export default Challenge;
