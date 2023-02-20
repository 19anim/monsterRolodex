import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./monster-detail.styles.css";

const MonsterDetail = ({resetFilter}) => {
  let { monsterId } = useParams();
  const [monster, setMonster] = useState({});
  const [monsterPost, setMonsterPost] = useState([]);

  useEffect(() => {
    resetFilter();
    fetch(`https://jsonplaceholder.typicode.com/users/${monsterId}`)
      .then((response) => response.json())
      .then((returnedMonster) => {
        setMonster(returnedMonster);
        fetch(`https://jsonplaceholder.typicode.com/users/${monsterId}/posts`)
          .then((response) => response.json())
          .then((returnedPosts) => {
            setMonsterPost(returnedPosts);
          });
      });
  }, []);

  return (
    <div className="monster-detail">
      <div className="monster-info-card">
        <img src={`https://robohash.org/${monsterId}?set=set2`} alt="Monster" />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
      </div>
      <div className="monster-contact-card">
        <h1>Contact info</h1>
        <h3>Phone: {monster.phone}</h3>
        <h3>Email: {monster.email}</h3>
        {monster.address ? (
          <>
            <h3>
              Address:{" "}
              {`${monster.address.suite} ${monster.address.street} ${monster.address.city}`}
            </h3>
            <h3>Zipcode: {monster.address.zipcode}</h3>
          </>
        ) : (
          <>
            <h3>Address:</h3>
            <h3>Zipcode:</h3>
          </>
        )}
        <h3>Website: {monster.website}</h3>
        {monster.company ? (
          <>
            <h3>Company name: {monster.company.name}</h3>
            <h3>Company About: {monster.company.catchPhrase}</h3>
          </>
        ) : (
          <>
            <h3>Company name:</h3>
            <h3>Company About:</h3>
          </>
        )}
      </div>
      <div className="monster-post-card">
        <h1>User posts title</h1>
        {monsterPost.map((post) => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>
    </div>
  );
};

export default MonsterDetail;
