import { Fragment, useState, useContext } from "react";
import classes from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import HambergerMenu from "./HambergerMenu";
import AuthContext from "@/store/AuthContext";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <Fragment>
      <HambergerMenu setNavOpen={setNavOpen} />
      <nav className={`${classes.navigation} ${navOpen && classes.open}`}>
        <div className={classes.navContainer}>
          <div className={classes.closeBtn} onClick={(e) => setNavOpen(false)}>
            <span>x</span>
          </div>
          {/* If logged */}
          {user && (
            <div className={classes.user}>
              <Image
                src="/images/navigation/user.png"
                width={50}
                height={50}
                alt="user"
              />
              <span>Jean-Kévin</span>
            </div>
          )}

          <div className={classes.logo}>
            <Link href="/">
              <a>
                <Image
                  height={40}
                  width={40}
                  src="/images/home-page/logo.svg"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <ul className={classes.navMenu}>
            {/* If NOT logged */}
            {!user && (
              <li
                className={classes.navItem}
                onClick={(e) => setNavOpen(false)}
              >
                <Link href="/">
                  <a>
                    <Image
                      width={16}
                      height={16}
                      src="/images/navigation/accueil.svg"
                      alt="Accueil"
                    />
                    <span>Accueil</span>
                  </a>
                </Link>
              </li>
            )}

            {/* If logged */}
            {user && (
              <>
                <li
                  className={classes.navItem}
                  onClick={(e) => setNavOpen(false)}
                >
                  <Link href="/user/me">
                    <a>
                      <Image
                        width={16}
                        height={16}
                        src="/images/navigation/profil.svg"
                        alt="Profil"
                      />
                      <span>Profil</span>
                    </a>
                  </Link>
                </li>

                <li
                  className={classes.navItem}
                  onClick={(e) => setNavOpen(false)}
                >
                  <Link href="/messages">
                    <a>
                      <Image
                        width={16}
                        height={16}
                        src="/images/navigation/profil.svg"
                        alt="Profil"
                      />
                      <span>Messages</span>
                    </a>
                  </Link>
                </li>

                <li
                  className={classes.navItem}
                  onClick={(e) => {
                    setNavOpen(false);
                    logout();
                  }}
                >
                  <Link href="/">
                    <a>
                      <Image
                        width={16}
                        height={16}
                        src="/images/navigation/profil.svg"
                        alt="Profil"
                      />
                      <span>Se déconnecter</span>
                    </a>
                  </Link>
                </li>
              </>
            )}

            {/* If NOT logged */}
            {!user && (
              <>
                <li
                  className={`${classes.navItem} ${classes.blueDesk}`}
                  onClick={(e) => setNavOpen(false)}
                >
                  <Link href="/signup">
                    <a>
                      <span>{"S'inscrire"}</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`${classes.navItem} ${classes.blueDesk}`}
                  onClick={(e) => setNavOpen(false)}
                >
                  <Link href="/login">
                    <a>
                      <span>Se connecter</span>
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
