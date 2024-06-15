import "./home.css";
import { useState, useEffect } from "react";
import { IUser } from "../../interfaces/user.interface";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../utils/fetch.functions";
import SearchBar from "../../components/searchBar";
import Header from "../../components/header";

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
            <div key={user.id} className="userContainer_card">
              <Link
                className="userContainer_card-link"
                to={`/user/${user.login}`}
              >
                <img
                  className="userContainer_card-avatar"
                  src={user.avatar_url}
                />
                <button className="userContainer_card-username">
                  {user.login}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
