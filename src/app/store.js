import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts/postSlice";
import usersReducer from "../feature/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
