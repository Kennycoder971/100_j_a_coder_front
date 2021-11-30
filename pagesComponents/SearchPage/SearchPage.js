import { useState } from "react";
import styles from "./SearchPage.module.scss";
import getUserByUsername from "@/queries/users/getUserByUsername";
import FriendCard from "@/components/FriendCard/FriendCard";

const SearchPage = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  async function searchUser(evt) {
    evt.preventDefault();
    try {
      const response = await getUserByUsername(name);
      setUsers(response.data.data.docs);
      console.log(response.data.data.docs);
    } catch (error) {}
  }

  return (
    <div className={styles.SearchPage}>
      <h1>Rechercher un utilisateur</h1>
      <form onSubmit={(evt) => searchUser(evt)}>
        <input
          type="text"
          name="search"
          value={name}
          onInput={(e) => setName(e.target.value)}
          className="blue-input"
        />
      </form>

      <ul className={styles.userList}>
        {users && users.map((user) => <FriendCard user={user} key={user.id} />)}
      </ul>
    </div>
  );
};

export default SearchPage;
