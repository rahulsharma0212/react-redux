import { useSelector } from "react-redux";
import { selectPostByIds } from "./postSlice";
import PostExcerpt from "./PostExcerpt";
import { useGetPostsQuery } from "./postSlice";

const PostsList = () => {
  /* const posts = useSelector((state) => state.posts); */
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();

  const orderedPostIds = useSelector(selectPostByIds);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    /*  const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date)); */
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
