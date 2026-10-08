import {
  CalendarDays,
  Clock,
  MapPin
} from "lucide-react";

import Sidebar from "../components/Sidebar";

import "./Dashboard.css";

function Schedule() {
  const classes = [
    {
      time: "09:00 AM - 10:00 AM",
      subject: "Web Technology",
      room: "Room 204"
    },
    {
      time: "10:00 AM - 11:00 AM",
      subject: "Distributed Systems",
      room: "Room 301"
    },
    {
      time: "11:30 AM - 12:30 PM",
      subject: "Data Science",
      room: "Lab 2"
    }
  ];

  const days = [
    {
      day: "MON",
      date: "06"
    },
    {
      day: "TUE",
      date: "07"
    },
    {
      day: "WED",
      date: "08",
      active: true
    },
    {
      day: "THU",
      date: "09"
    },
    {
      day: "FRI",
      date: "10"
    },
    {
      day: "SAT",
      date: "11"
    }
  ];

  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h2>Class Schedule</h2>
            <p>View your academic schedule</p>
          </div>

          <div className="student-profile">

            <div className="student-avatar">
              AD
            </div>

            <div className="student-info">
              <strong>Akashdeep Das</strong>
              <span>Student</span>
            </div>

          </div>

        </header>

        <section className="schedule-page">

          <div className="schedule-container">

            <div className="schedule-heading">

              <div>

                <span className="schedule-label">
                  TODAY'S SCHEDULE
                </span>

                <h1>
                  Class Schedule
                </h1>

                <p>
                  View your classes and academic schedule.
                </p>

              </div>

              <div className="schedule-calendar-icon">
                <CalendarDays size={30} />
              </div>

            </div>

            <div className="schedule-section">

              <div className="section-heading">
                <h2>Today's Classes</h2>
              </div>

              <div className="schedule-list">

                {classes.map((item, index) => (

                  <div
                    className="schedule-card"
                    key={index}
                  >

                    <div className="schedule-time">

                      <Clock size={17} />

                      <span>
                        {item.time}
                      </span>

                    </div>

                    <div className="schedule-class-info">

                      <h3>
                        {item.subject}
                      </h3>

                      <div className="schedule-details">

                        <span>

                          <MapPin size={15} />

                          {item.room}

                        </span>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div className="schedule-section">

              <div className="section-heading">
                <h2>Weekly Schedule</h2>
              </div>

              <div className="week-grid">

                {days.map((item, index) => (

                  <div
                    className={`week-day ${
                      item.active ? "current-day" : ""
                    }`}
                    key={index}
                  >

                    <span>
                      {item.day}
                    </span>

                    <strong>
                      {item.date}
                    </strong>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Schedule;