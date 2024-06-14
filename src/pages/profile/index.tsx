import "./profile.css";
import { Header } from "../../components/header";
import { RepoList } from "../../components/repoList";
import { UserInfo } from "../../components/userInfo";

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
