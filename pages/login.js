import LoginPage from "@/pagesComponents/LoginPage/LoginPage";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";
import { hasEmptyFields } from "@/helpers/clientSideValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { login } = useContext(AuthContext);

  function loginUser(fields, evt) {
    evt.preventDefault();

    if (hasEmptyFields(fields)) {
      return toast.error("Veuillez renseigner tous les champs.");
    }

    // response has success boolean
    login(fields).then((response) => {
      if (!response.success) {
        return toast.error(response.errorMessage);
      }

      location.assign("/user/me");
    });
  }

  return (
    <>
      <ToastContainer />
      <LoginPage loginUser={loginUser} />;
    </>
  );
}
