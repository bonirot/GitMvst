import "./searchRepoBar.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IRepository } from "../../interfaces/repo.interface";

type Props = {
  repos: IRepository[];
  onSearch: (results: IRepository[]) => void;
};

function SearchRepoBar({ repos, onSearch }: Props) {
  const [searched, setSearched] = useState("");

  const search = (query: string) => {
    if (!query) {
      onSearch(repos);
      return;
    }

    const filteredRepos = repos.filter((repo) =>
      repo.name.toLowerCase().includes(query.toLowerCase())
    );

    onSearch(filteredRepos);
  };

  useEffect(() => {
    search(searched);
  }, [searched, repos]);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearched(ev.target.value);
  };

  return (
    <input
      type="search"
      className="searchRepoBar"
      placeholder="Search"
      value={searched}
      onChange={handleChange}
    />
  );
}

export default SearchRepoBar;
