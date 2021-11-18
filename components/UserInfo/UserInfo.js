import React from "react";
import styles from "./UserInfo.module.scss";
import Image from "next/image";
import Link from "next/link";

const UserInfo = ({ user }) => (
  <div className={styles.UserInfo}>
    {" "}
    <Image
      width={50}
      height={50}
      src={
        user.profile_picture
          ? user.profile_picture
          : "/images/user-profile/no-image.png"
      }
      alt="Fond d'écran."
    />
    <div className={styles.userDetails}>
      <Link passHref={`/user/${user?.id}`}>
        <h4>Jean-luc</h4>
      </Link>

      <div className={styles.lastMessage}>Salut bro !</div>
    </div>
  </div>
);

UserInfo.defaultProps = {
  user: {
    profile_picture: "/images/user-profile/no-image.png",
    id: "me",
  },
};

export default UserInfo;
