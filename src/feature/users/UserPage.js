import { useSelector } from "react-redux";
import { selectUserById } from "./userSlice";
import { selectAllPosts, selectPostsByUser } from "../posts/postSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));

  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  /* const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  }); */

  const PostTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{PostTitles}</ol>
    </section>
  );
};

export default UserPage;
