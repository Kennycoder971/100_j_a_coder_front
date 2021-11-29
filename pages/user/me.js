import UserProfile from "@/pagesComponents/UserProfile/UserProfile";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function Me() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title> 100 jours à coder | {user?.username} </title>;
      </Head>
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
