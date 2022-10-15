import PostsList from "./feature/posts/PostsList";
import AddPostForm from "./feature/posts/AddPostForm";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
