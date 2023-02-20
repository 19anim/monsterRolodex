import { Link } from "react-router-dom";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <Link to={`monsters/${monster.id}`}>
        <img
          src={`https://robohash.org/${monster.id}?set=set2`}
          alt="Monster"
        />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
      </Link>
    </div>
  );
};

export default Card;
