import "./home.css";
import { useState, useEffect } from "react";
import { IUser } from "../../interfaces/user.interface";
import { fetchUsers } from "../../utils/fetch.functions";
import Header from "../../components/Header";
import User from "../../components/User";
import SearchUser from "../../components/SearchUserBar";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeletonUser from "../../components/CardSkeletonUser";

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
    return <CardSkeletonUser />;
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
