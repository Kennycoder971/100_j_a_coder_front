import styles from "./LoginPage.module.scss";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { useState } from "react";

const LoginPage = ({ loginUser }) => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  return (
    <main className={styles.loginPage}>
      <div className={styles.illustrations}>
        <h1>Bon Retour !</h1>
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
              Hey, <br />
              Content de <br />
              te revoir!
            </h1>
            <p>
              Si tu es nouveau{" "}
              <Link href="/signup">
                <a className="blue-link">/ Crée un compte</a>
              </Link>{" "}
            </p>
          </div>

          <form method="POST" onSubmit={(evt) => loginUser(fields, evt)}>
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

            <p>
              Mot de passe oublié ?{" "}
              <Link href="/sign-up">
                <a className="blue-link">/ Réinitialiser</a>
              </Link>{" "}
            </p>

            <Button color="blue">Se connecter</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
