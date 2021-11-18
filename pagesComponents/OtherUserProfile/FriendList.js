import styles from "./FriendList.module.scss";
import FriendCard from "@/components/FriendCard/FriendCard";
export default function FriendList({ user }) {
  return (
    <ul className={styles.FriendList}>
      <FriendCard />
      <FriendCard />
    </ul>
  );
}
