import React from "react";
import styles from "./Comment.module.scss";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const Comment = ({ text, user }) => (
  <div className={styles.Comment}>
    <div className={styles.userInfo}>
      <div className={styles.userImage}>
        <Image
          width={40}
          height={40}
          src={
            user?.profile_picture
              ? user?.profile_picture
              : "/images/user-profile/no-image.png"
          }
          alt={
            user?.username
              ? user?.username
              : "/images/user-profile/no-image.png"
          }
        />
      </div>
      <p className={styles.commentContent}>{text}</p>
    </div>
    <div className={styles.likes}>
      <AiFillHeart /> <span>1</span>
    </div>
  </div>
);

Comment.defaultProps = {
  text: "Bon courage pour ton défi !",
  user: {},
};

export default Comment;
