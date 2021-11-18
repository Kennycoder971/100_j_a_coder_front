import styles from "./ProfileModal.module.scss";
import ProfileModalForm from "./ProfileModalForm";
import ProfileModalFormImages from "./ProfileModalFormImages";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import ProfileModalChallenge from "./ProfileModalChallenge";

export default function ProfileModal({ setShowModal, openChallenge }) {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = ["Vos informations", "Vos images", "Défi"].map((tab, index) => {
    return (
      <li key={index} onClick={(e) => setCurrentTab(index)}>
        {" "}
        {tab}
      </li>
    );
  });

  return (
    <div className={styles.ProfileModal}>
      <div className={styles.container}>
        <div className={styles.close}>
          <div onClick={(e) => setShowModal(false)}>
            <IconContext.Provider value={{ size: "2rem" }}>
              <FaTimes />
            </IconContext.Provider>
          </div>
        </div>

        <ul className={styles.tabs}>{tabs}</ul>

        {currentTab === 0 && <ProfileModalForm />}

        {currentTab === 1 && <ProfileModalFormImages />}

        {currentTab === 2 && <ProfileModalChallenge />}
      </div>
    </div>
  );
}
