import {
  Bell,
  CalendarDays
} from "lucide-react";

import Sidebar from "../components/Sidebar";

import "./Dashboard.css";

function Notices() {
  const notices = [
    {
      title: "End Semester Examination Schedule Released",
      date: "08 October 2026",
      category: "Examination",
      description:
        "The university has released the examination schedule for the upcoming end semester examinations."
    },
    {
      title: "Assignment Submission Deadline",
      date: "07 October 2026",
      category: "Academic",
      description:
        "Students are requested to submit their pending assignments before the announced deadline."
    },
    {
      title: "Campus Maintenance Notice",
      date: "06 October 2026",
      category: "General",
      description:
        "Some campus facilities may experience temporary interruptions due to scheduled maintenance."
    }
  ];

  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h2>University Notices</h2>
            <p>
              Stay updated with the latest campus announcements
            </p>
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
                  CAMPUS UPDATES
                </span>

                <h1>
                  Latest Notices
                </h1>

                <p>
                  Important announcements and academic updates
                  from your university.
                </p>

              </div>

              <div className="schedule-calendar-icon">
                <Bell size={30} />
              </div>

            </div>

            <div className="schedule-section">

              <div className="section-heading">
                <h2>Recent Notices</h2>
              </div>

              <div className="schedule-list">

                {notices.map((notice, index) => (

                  <div
                    className="schedule-card"
                    key={index}
                  >

                    <div className="schedule-time">

                      <CalendarDays size={17} />

                      <span>
                        {notice.date}
                      </span>

                    </div>

                    <div className="schedule-class-info">

                      <h3>
                        {notice.title}
                      </h3>

                      <div className="schedule-details">

                        <span>
                          <Bell size={15} />
                          {notice.category}
                        </span>

                      </div>

                      <p>
                        {notice.description}
                      </p>

                    </div>

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

export default Notices;