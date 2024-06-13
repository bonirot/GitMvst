import { useEffect, useState } from "react";
import { fetchUsers } from "../../utils/fetch.functions";
import { IUser } from "../../interfaces/user.interface";

function UsersList() {
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
    <div className="userCard">
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} />
          <div>{user.login}</div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
