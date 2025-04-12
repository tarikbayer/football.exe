import Event from "./Event";
import "./styles/Timeline.css";
import { useState } from "react";

// --------------------
// State
// --------------------

function Timeline() {
  const [events, setEvents] = useState([
    {
      title: "Semi Automatic Offside Tech",
      year: "2022",
      description: "It came during 2022 World Cup in Qatar",
    },
    {
      title: "First Event",
      year: "2022",
      description: "Something happened",
    },
    {
      title: "VAR",
      year: "2018",
      description:
        "The use of video assistant referees (VARs) in football was first included in the Laws of the Game in 2018/19. After the 2016 introduction in CUP football in Europe, the VAR system was introduced in top-flight European football league competitions by Bundesliga and the Serie A at the beginning of the 2017–18 season and by La Liga at the beginning of the 2018–19 season.",
    },
  ]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  // --------------------
  // Derived Data
  // --------------------

  const uniqueYears = [...new Set(events.map((event) => event.year))];
  const filteredYears = selectedYear === "all" ? uniqueYears : [selectedYear];
  const sortedYears = [...filteredYears].sort((a, b) => {
    const yearA = +a;
    const yearB = +b;

    if (sortOrder === "asc") {
      return yearA - yearB;
    } else {
      return yearB - yearA;
    }
  });

  const handleYearSelection = (event) => {
    setSelectedYear(event.target.value);
  };

  const toggleSortOrder = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  };

  return (
    <div className="timeline">
      <div className="stickyHeader">
        <h2>Football Tech Timeline</h2>
      </div>
      <div className="controls">
        <select value={selectedYear} onChange={handleYearSelection}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2018">2018</option>
        </select>
        <button onClick={toggleSortOrder}>
          Sort {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>
      {sortedYears.map((year) => (
        <div className="yearContainer" key={year}>
          <h2>{year}</h2>
          {events
            .filter((event) => event.year === year)
            .map((event) => (
              <Event key={event.title} {...event} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default Timeline;
