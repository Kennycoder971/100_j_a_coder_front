import { useEffect, useState } from "react";
import styles from "./ChallengePage.module.scss";
import ChallengeFeed from "@/components/ChallengeFeed";
import getAllChallenges from "@/queries/challenges/getAllChallenges";

const ChallengePage = () => {
  const [challenges, setChallenges] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await getAllChallenges();
        setChallenges(response.data.data.docs);
        console.log(challenges);
      } catch (error) {
        setChallenges(null);
      }
    })();
  }, []);

  return (
    <main className={styles.ChallengePage}>
      <div className={styles.container}>
        <h1>Tous les derniers défis </h1>
        {challenges &&
          challenges.map((challenge) => (
            <ChallengeFeed
              userId={challenge.user_id}
              chall={challenge}
              key={challenge.id}
            />
          ))}
      </div>
    </main>
  );
};

export default ChallengePage;
