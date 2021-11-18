import SignupPage from "@/pagesComponents/SignupPage/SignupPage";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getErrorMsg from "@/helpers/getErrorMsg";
import {
  isEmail,
  isEqual,
  hasEmptyFields,
} from "@/helpers/clientSideValidation";

export default function Signup() {
  const { register } = useContext(AuthContext);
  const router = useRouter();

  async function registerUser(fields, evt) {
    evt.preventDefault();
    let error = false;

    const { email, password, password2 } = fields;

    if (hasEmptyFields(fields)) {
      error = true;
      toast.error("Veuillez renseigner tous les champs.");
      return;
    }

    if (isEmail(email)) {
      error = true;
      toast.error("L'email n'est pas valide.");
    }

    if (!isEqual(password, password2)) {
      error = true;
      toast.error("Les mots de passe ne sont pas similaires");
    }

    // Has success boolean
    const response = await register(fields);

    if (!response.success) {
      error = true;

      // Print error messages
      getErrorMsg(response).forEach((errMsg) => {
        toast.error(errMsg);
      });
    }

    if (!error) {
      router.push("/user/me");
    }
  }

  return (
    <>
      <ToastContainer />
      <SignupPage registerUser={registerUser} />
    </>
  );
}
