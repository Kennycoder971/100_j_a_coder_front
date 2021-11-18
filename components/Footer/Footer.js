import Link from "next/link";
import BtnLink from "../BtnLink.js/BtnLink";
import classes from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.wavesContainer}>
        <Image
          src="/images/home-page/footer-waves.svg"
          width={700}
          height={100}
          alt=""
        />
      </div>
      <div className={classes.container}>
        <p>Copyright &#169; L’année de 90j</p>
        <ul>
          <div>
            <li>
              {" "}
              <Link href="/">Accueil</Link>{" "}
            </li>
          </div>
          <div>
            <li>
              {" "}
              <Link href="/user/me">Profil</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/messages">Messages</Link>{" "}
            </li>
          </div>
        </ul>
        <div className={classes.btnContainer}>
          <div>
            <BtnLink color="blue" to="/signup">
              Inscription
            </BtnLink>
          </div>
          <BtnLink color="green" to="/login">
            Connexion
          </BtnLink>
        </div>
      </div>
    </footer>
  );
}
