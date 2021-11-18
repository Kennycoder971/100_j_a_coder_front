import { useState, useEffect } from "react";
import InputEl from "@/components/InputEl/InputEl";
import { toast } from "react-toastify";
import getErrorMsg from "@/helpers/getErrorMsg";
import getLastChallenge from "@/queries/challenges/getLastchallenge";
import createChallenge from "@/queries/challenges/createChallenge";
import updateLastChallenge from "@/queries/challenges/updateLastChallenge";

export default function ProfileModalChallenge({}) {
  const [challenge, setChallenge] = useState(null);

  const [fields, setFields] = useState({
    text: challenge?.text || "",
    technologies: challenge?.technologies || "",
    hours_a_day: challenge?.hours_a_day || "",
  });

  useEffect(() => {
    (async function() {
      try {
        const response = await getLastChallenge();
        if (response.data.data) {
          setChallenge(response.data.data);
          setFields(response.data.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setFields({ ...fields, [name]: value });
  }

  function arrayOfHoursOptions(maxHours) {
    const arr = [];
    for (let i = 1; i < maxHours + 1; i++) {
      arr.push(i);
    }
    return arr.map((hour) => {
      return (
        <option key={hour} value={`${hour}`}>
          {hour} heures
        </option>
      );
    });
  }

  async function handleChallenge(evt) {
    evt.preventDefault();

    try {
      if (!challenge) {
        await createChallenge(fields);

        toast.success("Votre défi a été créé !");
        return;
      }
      await updateLastChallenge(fields);

      toast.success("Votre défi a été modifié !");
    } catch (error) {
      console.log(fields);
      getErrorMsg(error.response.data)?.forEach((err) => toast.error(err));
    }
  }

  return (
    <form method="POST" onSubmit={(evt) => handleChallenge(evt)}>
      <div>
        <label htmlFor="text">But</label>
        <InputEl
          inputName="text"
          value={fields.text}
          onChange={(evt) => handleInputChange(evt)}
        />
        <small style={{ marginBottom: "1rem", display: "inline-block" }}>
          Ex: Apprendre les bases d'html, css et javascript
        </small>
      </div>
      <div>
        <label htmlFor="technologies">Technologies à pratiquer</label>
        <InputEl
          inputName="technologies"
          value={fields.technologies}
          onChange={(evt) => handleInputChange(evt)}
        />
        <small style={{ marginBottom: "1rem", display: "inline-block" }}>
          Séparez les par une virgule. Ex: html,css,javascript{" "}
        </small>
      </div>

      <div>
        <label htmlFor="hours_a_day">Genre</label>
        <select
          name="hours_a_day"
          id="hours_a_day"
          className="blue-input"
          value={fields.hours_a_day}
          onChange={(evt) => handleInputChange(evt)}
        >
          <option value="">Sélectionnez</option>
          {arrayOfHoursOptions(16)}
        </select>
      </div>

      <button type="submit" className={`btn`}>
        Enregister
      </button>
    </form>
  );
}
