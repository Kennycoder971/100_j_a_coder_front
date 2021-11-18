import React from 'react';
import styles from './Comment.module.scss';
import Image from 'next/image'
import {AiFillHeart} from 'react-icons/ai'

const Comment = () => (
  <div className={styles.Comment}>
    <div className={styles.userInfo}>
        <div className={styles.userImage}>
          <Image width={40} height={40} src="/images/user-profile/no-image.png" alt="Fond d'écran." />
        </div>
        <p className={styles.commentContent}>
          Bon courage pour ton défi !
        </p>
    </div>
    <div className={styles.likes}>
      <AiFillHeart/> <span>2</span>
    </div>
  </div>
);



export default Comment;
