import React from "react";
import styles from "./FriendCard.module.scss";
import Image from "next/dist/client/image";
import SelectOption from "../SelectOption/SelectOption";
import Link from "next/dist/client/link";

const FriendCard = ({ user, selectOptions }) => (
  <li className={styles.FriendCard}>
    <Link href={user?.id ? `/user/${user.id}` : "/user/me"}>
      <a>
        <Image
          width={60}
          height={60}
          src={
            user?.profile_picture
              ? user.profile_picture
              : "/images/user-profile/no-image.png"
          }
          alt={user?.username}
        />
      </a>
    </Link>
    <Link href={user?.id ? `/user/${user.id}` : "/user/me"}>
      <h4>{user.username}</h4>
    </Link>
    <SelectOption selectOptions={selectOptions} />
  </li>
);

FriendCard.defaultProps = {
  user: {
    profile_picture: "/images/user-profile/no-image.png",
    id: "me",
    username: "",
  },
  selectOptions: [["option1", function () {}]],
};
export default FriendCard;
