import "./repository.css";

type Props = {
  id: number;
  name: string;
  description: string | null;
};

function Repo(r: Props) {
  return (
    <div key={r.id} className="repositoryContainer_card">
      <p className="repositoryContainer_card-name">{r.name}</p>
      <p className="repositoryContainer_card-description">{r.description}</p>
    </div>
  );
}
export default Repo;
