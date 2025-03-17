import Event from "./Event";
import "./styles/Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="yearContainer">
        <h2 className="yearHeader">2022</h2>
        <Event
          title={"Semi Automatic Offside Tech"}
          year={"2022"}
          description={"It came during 2022 World  Cup in Qatar"}
        />
        <Event
          title="First Event"
          year="2022"
          description="Something happened"
        />
        <Event
          title="Second Event"
          year="2022"
          description="Another event in 2022"
        />
      </div>
      <div className="yearContainer">
        <h2 className="yearHeader">2018</h2>
        <Event
          title={"VAR"}
          year={"2018/19"}
          description={
            "The use of video assistant referees (VARs) in football was first included in the Laws of the Game in 2018/19. After the 2016 introduction in CUP football in Europe, the VAR system was introduced in top-flight European football league competitions by Bundesliga and the Serie A at the beginning of the 2017–18 season and by La Liga at the beginning of the 2018–19 season."
          }
        />
      </div>
    </div>
  );
}

export default Timeline;
