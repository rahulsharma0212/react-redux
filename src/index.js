import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { fetchUser } from "./feature/users/userSlice";
import { extendedApiSlice } from "./feature/posts/postSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(fetchUser());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
