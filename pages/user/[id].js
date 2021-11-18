import OtherUserProfile from "@/pagesComponents/OtherUserProfile/UserProfile";
import getUserById from "@/queries/users/getUserById";
import { ToastContainer } from "react-toastify";
export default function OtherUserProfilePage({ user }) {
  return (
    <>
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
