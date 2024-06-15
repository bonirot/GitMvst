import "./repoList.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRepos } from "../../utils/fetch.functions";
import { IRepository } from "../../interfaces/repo.interface";
import { FiBookOpen } from "react-icons/fi";
import { LuBookMarked } from "react-icons/lu";
import { GoProject } from "react-icons/go";

function RepoList() {
  const { username } = useParams<{ username: string }>();
  const [repo, setRepo] = useState<IRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      if (username) {
        // is username indefined?
        try {
          const userRepos = await fetchRepos(username);
          setRepo(userRepos);
        } catch (error) {
          setError("Error fetching repos");
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

  if (!repo) {
    return null;
  }

  return (
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
      {/* AQUÍ VA LA SEARCHBAR */}
      {repo.map((r) => (
        <div key={r.id} className="repositoryContainer_card">
          <p className="repositoryContainer_card-name">{r.name}</p>
          <p className="repositoryContainer_card-description">
            {r.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
