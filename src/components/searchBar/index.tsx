import { ChangeEvent, useEffect, useState } from "react";
import "./searchBar.css";
import { IUser } from "../../interfaces/user.interface";

type Props = {
  users: IUser[];
  onSearch: (results: IUser[]) => void;
};

export default function SearchBar({ users, onSearch }: Props) {
  const [searched, setSearched] = useState("");

  useEffect(() => {
    search(searched);
  }, [searched, users]);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearched(ev.target.value);
  };

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

  return (
    <input
      type="search"
      className="search"
      placeholder="Search"
      value={searched}
      onChange={handleChange}
    />
  );
}
