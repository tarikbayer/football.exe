function Event(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Event;
