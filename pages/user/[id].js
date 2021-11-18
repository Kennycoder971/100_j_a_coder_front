import OtherUserProfile from "@/pagesComponents/OtherUserProfile/UserProfile";
import getUserById from "@/queries/users/getUserById";

export default function OtherUserProfilePage({ user }) {
  return <OtherUserProfile user={user} />;
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
