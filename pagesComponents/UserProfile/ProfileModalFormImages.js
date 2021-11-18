import Dropzone from "react-dropzone";
import { useState, useContext, useRef, useEffect } from "react";
import AuthContext from "@/store/AuthContext";
import { toast } from "react-toastify";
import getErrorMsg from "@/helpers/getErrorMsg";
import updateUserCover from "@/queries/users/updateUserCover";
import updateUserPhoto from "@/queries/users/updateUserPhoto";

export default function ProfileModalFormImages() {
  const { user, setUser } = useContext(AuthContext);
  const [profilePic, setProfilePic] = useState(undefined);
  const [profileCover, setProfileCover] = useState(undefined);

  const formRef = useRef();

  async function upload(evt) {
    evt.preventDefault();
    const formData = new FormData();

    formData.append("file", profilePic);
    formData.append("cover", profileCover);

    try {
      if (profilePic) {
        const response = await updateUserPhoto(user?.id, formData);
        setUser((prevState) => ({
          ...prevState,
          profile_picture: response.data.data,
        }));
      }
      if (profileCover) {
        const response = await updateUserCover(user?.id, formData);
        setUser((prevState) => ({
          ...prevState,
          profile_cover: response.data.data,
        }));
      }
      toast.success("Vos données on bien été modifiées");
    } catch (error) {
      getErrorMsg(error.response.data)?.forEach((err) => toast.error(err));
    }
  }

  return (
    <form
      onSubmit={(evt) => upload(evt)}
      ref={formRef}
      encType="multipart/form-data"
    >
      <Dropzone onDrop={(acceptedFiles) => setProfilePic(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} name="profile_picture" />
            <b>Modifier la photo de profil</b>
            <p>Glissez et déposez ou cliquez pour sélectionner un fichier</p>
          </div>
        )}
      </Dropzone>

      <Dropzone onDrop={(acceptedFiles) => setProfileCover(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} name="profile_cover" />
            <b>Modifier la photo de couverture</b>
            <p>Glissez et déposez ou cliquez pour sélectionner un fichier</p>
          </div>
        )}
      </Dropzone>

      <button type="submit" className={`btn`}>
        Envoyer
      </button>
    </form>
  );
}
