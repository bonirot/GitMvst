import "./searchUserBar.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IUser } from "../../interfaces/user.interface";

type Props = {
  users: IUser[];
  onSearch: (results: IUser[]) => void;
};

function SearchUser({ users, onSearch }: Props) {
  const [searched, setSearched] = useState("");

  const search = (query: string) => {
    if (!query) {
      onSearch(users); // Devolver todos los usuarios si no hay búsqueda
      return;
    }

    const filteredUsers = users.filter((user) =>
      user.login.toLowerCase().includes(query.toLowerCase())
    );

    onSearch(filteredUsers);
  };

  useEffect(() => {
    search(searched);
  }, [searched, users]);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearched(ev.target.value);
  };

  return (
    <input
      type="search"
      className="searchUserBar"
      placeholder="Search"
      value={searched}
      onChange={handleChange}
    />
  );
}

export default SearchUser;
