import { useEffect, useState } from "react";
import styles from "./Comment.module.scss";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import getUserById from "@/queries/users/getUserById";

const Comment = ({ text, userId }) => {
  const [userCommenter, setUserCommenter] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getUserById(userId);
      setUserCommenter(response.data.data);
    })();
  }, []);

  return (
    <div className={styles.Comment}>
      <div className={styles.userInfo}>
        <div className={styles.userImage} title={userCommenter?.username}>
          <Image
            width={40}
            height={40}
            src={
              userCommenter?.profile_picture
                ? `http://localhost:5000/uploads/${userCommenter?.profile_picture}`
                : "/images/user-profile/no-image.png"
            }
            alt={
              userCommenter?.username
                ? userCommenter?.username
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
};

Comment.defaultProps = {
  text: "Bon courage pour ton défi !",
};

export default Comment;
