import React, { useState, useEffect } from "react";
import styles from "./UserProfile.module.scss";
import Challenge from "@/components/Challenge/Challenge";
import APropos from "./APropos";
import FriendList from "./FriendList";
import Link from "next/link";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
import createFriendRequest from "@/queries/friendRequests/createFriendRequest";
import { toast } from "react-toastify";

const UserProfile = ({ user }) => {
  // For the tabs
  const [selected, setSelected] = useState(0);
  const tabs = ["Profil", "À propos", "Amis"].map((tab, index) => {
    return (
      <li
        onClick={(e) => setSelected(index)}
        key={index}
        className={selected === index ? styles.selected : ""}
      >
        {tab}
      </li>
    );
  });

  async function addFriendReq(user) {
    try {
      await createFriendRequest(user?.id);
      toast.success("Votre requête a été envoyée.");
    } catch (error) {
      console.log(error.response);
      toast.error("Vous avez déjà envoyé une requête à cet utilisateur.");
    }
  }

  // For the modal
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <div className={styles.container}>
      <main className={styles.hero}>
        <Image
          width={1100}
          height={500}
          src={
            user?.profile_cover
              ? `http://localhost:5000/uploads/${user?.profile_cover}`
              : "/images/user-profile/no-bg.jpg"
          }
          alt="Fond d'écran."
        />
        <div className={styles.userImage}>
          <Image
            width={60}
            height={60}
            src={
              user?.profile_picture
                ? `http://localhost:5000/uploads/${user?.profile_picture}`
                : "/images/user-profile/no-image.png"
            }
            alt="Fond d'écran."
          />
        </div>
      </main>

      <div className={styles.user}>
        <div className={styles.userInfo}>
          <h3 className={styles.username}>{user?.username}</h3>
          <p>{user?.intro}</p>
        </div>
        <div className={styles.interaction}>
          <div
            className={styles.friendRequest}
            onClick={(e) => {
              addFriendReq(user);
            }}
          >
            Ajouter +
          </div>
          <div
            className={styles.userSettings}
            onClick={(e) => setShowModal(true)}
          >
            <FaRegEnvelope />
          </div>
        </div>
      </div>

      {showModal && (
        <ProfileModal showModal={showModal} setShowModal={setShowModal} />
      )}

      <ul className={styles.tabs}>{tabs}</ul>

      {selected === 0 && (
        <React.Fragment>
          <article className={styles.description}>
            <h3 className={styles.descriptionTitle}>Description</h3>
            <p>{user?.profile ? user.profile : "Pas de description !"}</p>
          </article>

          <Challenge />
        </React.Fragment>
      )}

      {selected === 1 && <APropos user={user} />}

      {selected === 2 && <FriendList user={user} />}
    </div>
  );
};

export default UserProfile;
