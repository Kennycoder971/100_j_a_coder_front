import styles from "./SignupPage.module.scss";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useState } from "react";

const SignupPage = ({ registerUser }) => {
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  return (
    <main className={styles.signupPage}>
      <div className={styles.illustrations}>
        <h1>Binevenue !</h1>
        <div className={styles.system}>
          <Image
            width={400}
            height={400}
            src="/images/login-signup/solar-system.svg"
            alt="wave"
          />
        </div>
        <div className={styles.undraw}>
          <Image
            width={320}
            height={400}
            src="/images/login-signup/undraw.svg"
            alt="wave"
          />
        </div>
        <div className={styles.wave}>
          <Image layout="fill" src="/images/login-signup/wave.svg" alt="wave" />
        </div>
      </div>
      <div className={styles.formWave}>
        <Image
          width={320}
          height={400}
          src="/images/login-signup/form-wave.svg"
          alt="waves"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.text}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <Image
                    height={50}
                    width={50}
                    src="/images/home-page/logo.svg"
                    alt="Logo"
                  />
                </a>
              </Link>
            </div>
            <h1>
              Bienvenue à <br /> toi!
            </h1>
            <p>
              Déjà un compte ?{" "}
              <Link href="/login">
                <a className="blue-link">/ Se connecter</a>
              </Link>{" "}
            </p>
          </div>

          <form method="POST" onSubmit={(evt) => registerUser(fields, evt)}>
            <div className={styles.formControl}>
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="username"
                className="blue-input"
                id="username"
                autoComplete="username"
                value={fields.username}
                onChange={(e) =>
                  setFields({
                    ...fields,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="email">Adresse mail</label>
              <input
                type="email"
                className="blue-input"
                id="email"
                autoComplete="email"
                value={fields.email}
                onChange={(e) =>
                  setFields({
                    ...fields,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                autoComplete="new-password"
                className="blue-input"
                id="password"
                value={fields.password}
                onChange={(e) =>
                  setFields({
                    ...fields,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="password2">Retaper le mot de passe</label>
              <input
                type="password"
                autoComplete="new-password"
                className="blue-input"
                id="password2"
                value={fields.password2}
                onChange={(e) =>
                  setFields({
                    ...fields,
                    password2: e.target.value,
                  })
                }
              />
            </div>
            <p></p>
            <Button color="blue">{"S'inscrire"}</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
