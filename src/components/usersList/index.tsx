import { useEffect, useState } from "react";
import { fetchUsers } from "../../utils/fetch.functions";
import { IUser } from "../../interfaces/user.interface";
import { Link } from "react-router-dom";
import "./usersList.css";

export function UsersList() {
  const [users, setUsers] = useState([] as IUser[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); //

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
      } catch (error) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="userContainer">
      {users.map((user) => (
        <div key={user.id} className="userContainer_card">
          <Link className="userContainer_card-link" to={`/user/${user.login}`}>
            <img className="userContainer_card-avatar" src={user.avatar_url} />
            <p className="userContainer_card-username">{user.login}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
