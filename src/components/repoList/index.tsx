import "./repoList.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRepos } from "../../utils/fetch.functions";
import { IRepository } from "../../interfaces/repo.interface";

export function RepoList() {
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
      <h1>Repositories</h1>
      <div className="repositoryContainer_card">
        {repo.map((r) => (
          <div key={r.id}>
            <p>Name: {r.name}</p>
            <p>Description: {r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
