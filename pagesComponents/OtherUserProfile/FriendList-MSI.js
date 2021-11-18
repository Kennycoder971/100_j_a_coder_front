import styles from "./FriendList.module.scss";
import FriendCard from "@/components/FriendCard/FriendCard";
import { useState, useEffect } from "react";
import getUserFriends from "@/queries/friends/getUserFriends";

export default function FriendList({ user }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async function() {
      const response = await getUserFriends(user.id);
      setFriends(response.data.data);
    })();
  }, []);

  return (
    <ul className={styles.FriendList}>
      {friends?.map((user) => {
        return <FriendCard key={user.id} user={user} selectOptions={[]} />;
      })}
    </ul>
  );
}
