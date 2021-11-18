import styles from "./FriendRequestsList.module.scss";
import FriendCard from "@/components/FriendCard/FriendCard";
import { useState, useEffect, useContext } from "react";
import getAllFriendRequests from "@/queries/friendRequests/getAllFriendRequests";
import deleteFriendRequestById from "@/queries/friendRequests/deleteFriendRequestById";

let currPage = 1;

function funy() {
  this.bind();
}

export default function FriendRequests({ user }) {
  const [requesters, setRequesters] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await getAllFriendRequests();
      setRequesters(response.data.data);
    })();
  }, []);

  async function nextPage(page) {
    const response = await getAllFriendRequests(page);
    setRequesters((prevState) => ({
      ...response.data.data,
      docs: [...prevState.docs, response.data.data.docs],
    }));
  }

  function deleteRequest(reqId) {
    return async function () {
      await deleteFriendRequestById(reqId);
      setRequesters((prevState) => ({
        ...prevState,
        docs: [...prevState.docs].filter(
          (user) => user.request_id_from !== reqId
        ),
      }));
    };
  }

  return (
    <div className={styles.FriendRequests}>
      {requesters?.docs?.map((user) => {
        return (
          <FriendCard
            key={user.id}
            user={user}
            selectOptions={[["Supprimer", deleteRequest(user.request_id_from)]]}
          />
        );
      })}

      {requesters.next && (
        <button
          type="button"
          className={`${styles.more} btn`}
          onClick={(e) => {
            nextPage((currPage += 1));
          }}
        >
          afficher plus
        </button>
      )}
    </div>
  );
}
