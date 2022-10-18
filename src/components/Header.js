import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, getCount } from "../feature/posts/postSlice";

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  return (
    <header className="header">
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Post">Post</Link>
          </li>
          <li>
            <Link to="user">User</Link>
          </li>
        </ul>
        <button onClick={() => dispatch(increaseCount())}>{count}</button>
      </nav>
    </header>
  );
};

export default Header;
