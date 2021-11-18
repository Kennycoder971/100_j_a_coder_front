import styles from "./FriendList.module.scss";
import FriendCard from "@/components/FriendCard/FriendCard";
import { useState, useEffect } from "react";
import getFriends from "@/queries/friends/getFriends";
import deleteFriendById from "@/queries/friends/deleteFriend";

export default function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    (async function() {
      const response = await getFriends();
      setFriends(response.data.data);
    })();
  }, []);

  function deleteFriend(friendId) {
    return async function() {
      if (confirm("En êtes vous sûr ?")) {
        try {
          await deleteFriendById(friendId);
        } catch (error) {
          console.log(error.response);
        }
      }
    };
  }

  return (
    <ul className={styles.FriendList}>
      {friends?.map((user) => {
        return (
          <FriendCard
            key={user.id}
            user={user}
            selectOptions={[["Supprimer", deleteFriend(user.id)]]}
          />
        );
      })}
    </ul>
  );
}
