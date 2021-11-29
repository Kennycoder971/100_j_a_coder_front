import OtherUserProfile from "@/pagesComponents/OtherUserProfile/UserProfile";
import getUserById from "@/queries/users/getUserById";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export default function OtherUserProfilePage({ user }) {
  return (
    <>
      <Head>
        <title> 100 jours à coder | {user?.username} </title>;
      </Head>
      <ToastContainer position="top-left" />
      <OtherUserProfile user={user} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const userId = +params.id;
  const response = await getUserById(userId);

  return {
    props: {
      user: response.data.data,
    },
  };
}
