import "./home.css";
import { useState, useEffect } from "react";
import { IUser } from "../../interfaces/user.interface";
import { fetchUsers } from "../../utils/fetch.functions";
import SearchBar from "../../components/searchBar";
import Header from "../../components/header";
import Users from "../../components/users";

function Home() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        <SearchBar users={users} onSearch={handleSearchResults} />
        <div className="userContainer">
          {filteredUsers.map((user) => (
            <Users
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
