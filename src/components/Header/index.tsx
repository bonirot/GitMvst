import { Link } from "react-router-dom";
import "./header.css";
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <>
      <header className="header">
        <button>
          <IoMenu color="white" size="2.5rem" />
        </button>
        <img className="header-logo" src="/terminal_logo.png" />
        <Link to="/">
          <h1 className="header-title">GitMvst</h1>
        </Link>
      </header>
    </>
  );
}

export default Header;
