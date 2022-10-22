import { useState } from "react";
import { useSelector } from "react-redux";

import { selectAllUsers } from "../users/userSlice";
import { useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "./postSlice";
const AddPostForm = () => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  /* const canSave = Boolean(title) && Boolean(content) && Boolean(userId); */
  const canSave = [title, content, userId].every(Boolean) && !isLoading;

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        await addNewPost({ title, body: content, userId }).unwrap();
        /*  dispatch(postAdded(title, content, userId)); */
        setUserId("");
        setTitle("");
        setContent("");
        navigate("/");
      } catch (e) {
        console.error("Failed to save post", e);
      }
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
