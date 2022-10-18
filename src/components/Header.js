import { Link } from "react-router-dom";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
