import "./user.css";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  id: number;
  login: string;
  avatar_url: string;
};

function User(u: Props) {
  return (
    <div key={u.id} className="userContainer_card">
      <Link className="userContainer_card-link" to={`/user/${u.login}`}>
        <img className="userContainer_card-avatar" src={u.avatar_url} />
        <button className="userContainer_card-username">{u.login}</button>
      </Link>
    </div>
  );
}
export default User;
