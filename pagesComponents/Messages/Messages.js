import React from "react";
import styles from "./Messages.module.scss";
import UserInfo from "@/components/UserInfo/UserInfo";
import Message from "@/components/Message/Message";
import { BiLeftArrowCircle } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import { IconContext } from "react-icons";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";

const Messages = () => {
  const router = useRouter();

  return (
    <div className={styles.Messages}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="#">
            <div className={styles.backBtn} onClick={(e) => router.back()}>
              <IconContext.Provider value={{ size: "3rem" }}>
                <BiLeftArrowCircle />
              </IconContext.Provider>
            </div>
          </Link>

          <h1>Messages</h1>
        </nav>
        <main>
          <div className={styles.userInfo}>
            <UserInfo />
          </div>
          <ul className={styles.messages}>
            <Message userClass={"user-two"} />
            <Message userClass={"user-one"} />

            <form className={styles.messageForm}>
              <input type="text" className="blue-input" />
              <button>
                {" "}
                <AiOutlineSend />{" "}
              </button>
            </form>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Messages;
