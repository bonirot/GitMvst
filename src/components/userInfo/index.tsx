import "./userInfo.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserProfile } from "../../utils/fetch.functions";
import { IProfile } from "../../interfaces/profile.interface";
import { MdOutlinePlace } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

function UserInfo() {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState(null as IProfile | null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as string | null);

  useEffect(() => {
    const getUser = async () => {
      if (username) {
        try {
          const userData = await fetchUserProfile(username);
          setUser(userData);
        } catch (error) {
          setError("Error fetching user");
        } finally {
          setLoading(false);
        }
      } else {
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
    <div className="userInfoContainer">
      <img
        className="userInfoContainer_avatar"
        src={user.avatar_url}
        alt={user.login}
      />
      <div className="userInfoContainer_text">
        <p className="userInfoContainer_text-name">{user.name}</p>
        <p className="userInfoContainer_text-user">
          <FaRegUser className="react-icons" />
          {user.login}
        </p>
        {user.bio && <p className="userInfoContainer_text-bio">{user.bio}</p>}
        <button className="userInfoContainer_text-followBtn">Follow</button>
        {user.followers && (
          <p className="userInfoContainer_text-follow">
            <GoPeople className="react-icons" />
            {user.followers} followers {user.following} following
          </p>
        )}
        {user.location && (
          <p className="userInfoContainer_text-location">
            <MdOutlinePlace className="react-icons" />
            {user.location}
          </p>
        )}
      </div>
    </div>
  );
}
export default UserInfo;
