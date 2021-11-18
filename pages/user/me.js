import UserProfile from "@/pagesComponents/UserProfile/UserProfile";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Me() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ToastContainer position="top-left" />
      <UserProfile user={user} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
