import "./profile.css";
import Header from "../../components/header";
import UserInfo from "../../components/userInfo";
import RepoList from "../../components/repoList";

function Profile() {
  return (
    <>
      <Header />
      <div className="profilePageContainer">
        <UserInfo />
        <RepoList />
      </div>
    </>
  );
}

export default Profile;
