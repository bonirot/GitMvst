import "./profile.css";
import { useEffect, useState } from "react";
import { IRepository } from "../../interfaces/repo.interface";
import { fetchRepos } from "../../utils/fetch.functions";
import { useParams } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { LuBookMarked } from "react-icons/lu";
import { GoProject } from "react-icons/go";
import SearchRepoBar from "../../components/SearchRepoBar";
import CardSkeletonProfile from "../../components/CardSkeletonProfile";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import Repo from "../../components/Repository";

function Profile() {
  const { username } = useParams<{ username: string | undefined }>();
  const [repos, setRepos] = useState([] as IRepository[]);
  const [filteredRepos, setFilteredRepos] = useState([] as IRepository[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as string | null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchRepos(username);
        setRepos(fetchedUsers);
        setFilteredRepos(fetchedUsers);
      } catch (error) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const handleSearchResults = (results: IRepository[]) => {
    setFilteredRepos(results);
  };

  if (loading) {
    return <CardSkeletonProfile />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="profilePageContainer">
        <UserInfo />
        <div className="repositoryContainer">
          <nav className="repositoryContainer_navbar">
            <p className="repositoryContainer_navbar-link">
              <FiBookOpen size="1.7rem" className="repositoryIcons" />
              Overview
            </p>
            <p className="repositoryContainer_navbar-link active">
              <LuBookMarked size="1.7rem" className="repositoryIcons" />
              Repositories
            </p>
            <p className="repositoryContainer_navbar-link">
              <GoProject size="1.7rem" className="repositoryIcons" />
              Projects
            </p>
          </nav>
          <SearchRepoBar repos={repos} onSearch={handleSearchResults} />
          <div>
            {filteredRepos.map((repo) => (
              <Repo
                key={repo.id}
                id={repo.id}
                name={repo.name}
                description={repo.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
