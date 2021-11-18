import styles from "./APropos.module.scss";

export default function APropos({ user }) {
  return (
    <div className={styles.APropos}>
      <div className={styles.aProposContainer}>
        <h3>Vue d'ensemble</h3>
        <p>Nom: {user?.lastname ? user.lastname : "Non renseigné"}</p>
        <p>Prénom: {user?.firstname ? user.firstname : "Non renseigné"}</p>
        <p>Adresse: {user?.address ? user.address : "Non renseigné"}</p>
        <p>
          Téléphone: {user?.phone_number ? user.phone_number : "Non renseigné"}
        </p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
}
