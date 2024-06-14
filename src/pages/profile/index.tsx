import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../../utils/fetch.functions";
import { IProfile } from "../../interfaces/profile.interface";

function Profile() {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<IProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      if (username) {
        // is username indefined?
        try {
          const userData = await fetchUserProfile(username);
          setUser(userData);
        } catch (error) {
          setError("Error fetching user");
        } finally {
          setLoading(false);
        }
      } else {
        //in case there is no username, then throw and error
        setError("Username is not provided");
        setLoading(false);
      }
    };

    getUser();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="userDetailContainer">
      <h1>{user.login}</h1>
      <div className="userDetailCard">
        <img
          className="userDetailCard-avatar"
          src={user.avatar_url}
          alt={user.login}
        />
        <p>Name: {user.login}</p>
        <p>Location: {user.location}</p>
      </div>
    </div>
  );
}

export default Profile;
