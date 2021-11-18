import styles from "./ProfileModal.module.scss";
import ProfileModalForm from "./ProfileModalForm";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function ProfileModal({ showModal, setShowModal }) {
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

        <ProfileModalForm />
      </div>
    </div>
  );
}
