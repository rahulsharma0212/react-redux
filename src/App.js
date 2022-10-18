import PostsList from "./feature/posts/PostsList";
import AddPostForm from "./feature/posts/AddPostForm";
import SinglePostPage from "./feature/posts/SinglePostPage";
import EditPostForm from "./feature/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
