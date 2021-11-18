import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";
import styles from "./Challenge.module.scss";
import Comment from "../Comment/Comment";
import Category from "../Category/Category";
import Image from "next/dist/client/image";
import SelectOption from "../SelectOption/SelectOption";
import { useState, useEffect } from "react";
import getLastChallenge from "@/queries/challenges/getLastchallenge";
import { getTimeRemaining, daysAgo } from "@/helpers/formatDates";
import createChallengeLike from "@/queries/challengeLikes/createChallengeLike";
import getChallengeLikes from "@/queries/challengeLikes/getChallengeLikes";
import { toast } from "react-toastify";
import getChallengeComments from "@/queries/challengeComments/getChallengeComents";
import createChallengeComments from "@/queries/challengeComments/createChallengeComments";
import getErrorMsg from "@/helpers/getErrorMsg";

const Challenge = ({ selectOptions, user }) => {
  const [challenge, setChallenge] = useState(null);
  const [challengeLikes, setChallengeLikes] = useState(null);
  const [challengeComments, setChallengeComments] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({
    string: "",
    object: {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    },
  });

  // Get and set challenge infos
  useEffect(() => {
    (async function() {
      try {
        const response = await getLastChallenge();
        setChallenge(response.data.data);

        setTimeRemaining({
          string: response.data.data.end_date,
          object: getTimeRemaining(response.data.data.end_date),
        });

        // Get likes for the challenge
        const response2 = await getChallengeLikes(response.data.data.id);
        setChallengeLikes(response2.data.data);

        // Get comments for the challenge
        const response3 = await getChallengeComments(response.data.data.id);
        setChallengeComments(response3.data.data);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevState) => ({
        ...prevState,
        object: getTimeRemaining(prevState.string),
      }));
    }, 1000);

    return () => clearInterval(interval);
  });

  const [challengeTechArray, setChallengeTechArray] = useState(null);
  const [challengeCommentsArray, setChallengeCommentsArray] = useState(null);

  useEffect(() => {
    // Create a array of categories from the challenge.technologies
    const techArray = challenge?.technologies.split(",");
    const technologies = techArray?.map((tech, index) => (
      <Category text={tech} key={index} />
    ));

    setChallengeTechArray(technologies);

    const commentsArray = challengeComments?.map(({ content, id }) => {
      return <Comment text={content} key={id} />;
    });

    setChallengeCommentsArray(commentsArray);
  }, [challenge, challengeComments]);

  async function giveChallengeLike(challengeId) {
    try {
      await createChallengeLike(challengeId);
      setChallengeLikes((like) => like + 1);
    } catch (error) {
      toast.error(error.response.data.errorMessage);
    }
  }
  const [commentInputText, setCommentInputText] = useState("");

  async function addChallengeComment(evt, challengeId) {
    evt.preventDefault();

    try {
      // Create comment
      await createChallengeComments(challengeId, commentInputText);
      // Get comments for the challenge
      const response = await getChallengeComments(challengeId);
      setChallengeComments(response.data.data);
    } catch (error) {
      // Print error messages
      getErrorMsg(error.response.data).forEach((errMsg) => {
        toast.error(errMsg);
      });
    }
  }

  return (
    <div className={styles.Challenge}>
      {selectOptions && (
        <div className={styles.options}>
          <SelectOption selectOptions={selectOptions} />
        </div>
      )}

      <div className={styles.challengeInfo}>
        <div className={styles.userPhoto}>
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
        <div className={styles.challengeContent}>
          <div className={styles.challengeTime}>
            <div className={styles.startedAt}>
              <h4 className={styles.username}>{user?.username}</h4>
              <span> a commencé son défi {daysAgo(challenge?.createdAt)}</span>
            </div>
            <div className={styles.timeLikes}>
              <h4 className={styles.remainingTime}>
                Temps restant: {timeRemaining?.object.days}j{" "}
                {timeRemaining?.object.hours}h {timeRemaining?.object.minutes}m{" "}
                {timeRemaining?.object.seconds}s
              </h4>
              <div
                className={styles.likes}
                onClick={() => giveChallengeLike(challenge?.id)}
              >
                <IconContext.Provider
                  value={{ className: challengeLikes > 0 ? "red-svg" : "" }}
                >
                  <AiFillHeart /> {challengeLikes && challengeLikes}
                </IconContext.Provider>
              </div>
            </div>
          </div>

          <h3 className={styles.challengeTitle}>{challenge?.text}</h3>
          <div className={styles.timeADay}>
            Pendant {challenge?.hours_a_day} heures pas jours
          </div>
          <h3 className={styles.techologiesTitle}>Technologies:</h3>
          <div className={styles.techologies}>{challengeTechArray}</div>
        </div>
      </div>
      <div className={styles.challengeComments}>{challengeCommentsArray}</div>
      <div className={`${styles.challengeInput}`}>
        <Image
          width={40}
          height={40}
          src={
            user?.profile_picture
              ? `http://localhost:5000/uploads/${user?.profile_picture}`
              : "/images/user-profile/no-image.png"
          }
          alt={user?.username}
        />
        <form onSubmit={(evt) => addChallengeComment(evt, challenge.id)}>
          <input
            type="text"
            name="comment"
            placeholder="Écrivez un commentaire."
            id="comment-input"
            className="blue-input"
            value={commentInputText}
            onChange={(evt) => setCommentInputText(evt.target.value)}
          />

          <button type="submit">+</button>
        </form>
      </div>
    </div>
  );
};

Challenge.defaultProps = {};

export default Challenge;
