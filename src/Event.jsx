import "./styles/Event.css";

function Event({ title, year, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{year}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Event;
