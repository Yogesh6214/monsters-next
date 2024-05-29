import "./card-list.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt="monsters"
      />
      <h1>{props.monster.name}</h1>
      <h1>{props.monster.email}</h1>
    </div>
  );
};
