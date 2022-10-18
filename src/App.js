import PostsList from "./feature/posts/PostsList";
import AddPostForm from "./feature/posts/AddPostForm";
import SinglePostPage from "./feature/posts/SinglePostPage";
import EditPostForm from "./feature/posts/EditPostForm";
import UserPage from "./feature/users/UserPage";
import UserList from "./feature/users/UserList";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="user">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* catch all -replace with 404 component */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
