import Event from "./Event";

function Timeline() {
  return (
    <div>
      <Event
        name={"VAR"}
        year={"2020"}
        description={"Video Assistant Referee was introduced during EURO 2021"}
      />
      <Event
        name={"Semi Automatic Offside Tech"}
        year={"2018"}
        description={"It came during UCL Final 2020"}
      />
    </div>
  );
}

export default Timeline;
