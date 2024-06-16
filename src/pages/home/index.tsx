import "./home.css";
import { useState, useEffect } from "react";
import { IUser } from "../../interfaces/user.interface";
import { fetchUsers } from "../../utils/fetch.functions";
import Header from "../../components/header";
import User from "../../components/user";
import SearchUser from "../../components/searchUserBar";

function Home() {
  const [users, setUsers] = useState([] as IUser[]);
  const [filteredUsers, setFilteredUsers] = useState([] as IUser[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as string | null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
      } catch (error) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleSearchResults = (results: IUser[]) => {
    setFilteredUsers(results);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="searchUserContainer">
        <SearchUser users={users} onSearch={handleSearchResults} />
        <div className="userContainer">
          {filteredUsers.map((user) => (
            <User
              key={user.id}
              id={user.id}
              login={user.login}
              avatar_url={user.avatar_url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
