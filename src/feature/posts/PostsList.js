import { useSelector } from "react-redux";
import { selectPostByIds, getPostsStatus, getPostsError } from "./postSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  /* const posts = useSelector((state) => state.posts); */

  const orderedPostIds = useSelector(selectPostByIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postStatus === "succeeded") {
    /*  const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date)); */
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
