import { useState, useContext } from "react";
import InputEl from "@/components/InputEl/InputEl";
import { toast } from "react-toastify";
import updateUserById from "@/queries/users/updateUserById";
import AuthContext from "@/store/AuthContext";
import getErrorMsg from "@/helpers/getErrorMsg";

export default function ProfileModalForm() {
  const { user, setUser } = useContext(AuthContext);

  const [fields, setFields] = useState({
    firstname: user?.firstname || undefined,
    lastname: user?.lastname || undefined,
    username: user?.username || undefined,
    phone_number: user?.phone_number || undefined,
    email: user?.email || undefined,
    intro: user?.intro || undefined,
    profile: user?.profile || undefined,
    address: user?.address || undefined,
    city: user?.city || undefined,
    gender: user?.gender || undefined,
    postal_code: user?.postal_code || undefined,
    birth_date: user?.birth_date || undefined,
  });

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setFields({ ...fields, [name]: value });
  }

  async function updateUser(evt) {
    evt.preventDefault();
    try {
      const response = await updateUserById(user?.id, fields);
      setUser(response.data.data);

      toast.success("Vos données on bien été modifiees");
    } catch (error) {
      getErrorMsg(error.response.data)?.forEach((err) => toast.error(err));
    }
  }

  return (
    <form method="POST" onSubmit={(evt) => updateUser(evt)}>
      <div>
        <label htmlFor="firstname">Prénom</label>
        <InputEl
          inputName="firstname"
          value={fields.firstname}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="lastname">Nom de famille</label>
        <InputEl
          inputName="lastname"
          value={fields.lastname}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="username">Nom d'utilisateur</label>
        <InputEl
          inputName="username"
          value={fields.username}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="phone_number">Téléphone</label>
        <InputEl
          inputName="phone_number"
          type="tel"
          value={fields.phone_number}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <InputEl
          inputName="email"
          type="email"
          value={fields.email}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="intro">Titre d'utilisateur</label>
        <InputEl
          inputName="intro"
          value={fields.intro}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="profile">Description</label>
        <textarea
          value={fields.profile}
          name="profile"
          id="profile"
          rows="3"
          className="blue-input"
          onChange={(evt) => handleInputChange(evt)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="address">Adresse</label>
        <InputEl
          inputName="address"
          value={fields.address}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="city">Ville</label>
        <InputEl
          inputName="city"
          value={fields.city}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="postal_code">Code postal</label>
        <InputEl
          inputName="postal_code"
          value={fields.postal_code}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <div>
        <label htmlFor="gender">Genre</label>
        <select
          name="gender"
          id="gender"
          className="blue-input"
          value={fields.gender}
          onChange={(evt) => handleInputChange(evt)}
        >
          <option>Sélectionner</option>
          <option value="m">Homme</option>
          <option value="f">Femme</option>
        </select>
      </div>
      <div>
        <label htmlFor="birth_date">Date de naissance</label>
        <InputEl
          inputName="birth_date"
          type="date"
          value={fields.birth_date}
          onChange={(evt) => handleInputChange(evt)}
        />
      </div>
      <button type="submit" className={`btn`}>
        Envoyer
      </button>
    </form>
  );
}
