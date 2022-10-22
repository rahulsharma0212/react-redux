import { useSelector } from "react-redux";
import { selectUserById } from "./userSlice";
import { Link, useParams } from "react-router-dom";
import { useGetPostsByUserIdQuery } from "../posts/postSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(userId);

  /* const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  ); */

  /* const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  }); */

  let content;
  if (isLoading) {
    content = <p>loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map((id) => (
      <li key={id}>
        <Link to={`/post/${id}`}>{entities[id].title}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{content}</ol>
    </section>
  );
};

export default UserPage;
