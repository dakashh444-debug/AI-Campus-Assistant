import {
  Menu,
  Bot,
  CalendarDays,
  Bell,
  FileText,
  ArrowRight
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard">

      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <button
            className="menu-button"
            type="button"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Menu size={22} />
          </button>

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

        <section className="dashboard-content">

          <div className="welcome-section">

            <span className="welcome-label">
              STUDENT DASHBOARD
            </span>

            <h1>
              Welcome back, Akashdeep 👋
            </h1>

            <p className="welcome-description">
              Here's what's happening with your academics and campus activities.
            </p>

          </div>

          <div className="ai-card">

            <div className="ai-card-left">

              <div className="ai-icon">
                <Bot size={28} />
              </div>

              <div>
                <h2>AI Campus Assistant</h2>

                <p>
                  Ask questions about your schedule, notices, documents,
                  courses and university information.
                </p>
              </div>

            </div>

            <Link to="/assistant" className="ask-button">
              Ask Assistant
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="section-heading">
            <h2>Quick Access</h2>
          </div>

          <div className="quick-grid">

            <Link to="/assistant" className="quick-card">

              <div className="quick-icon">
                <Bot size={22} />
              </div>

              <div>
                <h3>AI Assistant</h3>
                <p>Ask campus questions</p>
              </div>

            </Link>

            <Link to="/schedule" className="quick-card">

              <div className="quick-icon">
                <CalendarDays size={22} />
              </div>

              <div>
                <h3>My Schedule</h3>
                <p>View today's classes</p>
              </div>

            </Link>

            <Link to="/notices" className="quick-card">

              <div className="quick-icon">
                <Bell size={22} />
              </div>

              <div>
                <h3>Notices</h3>
                <p>Latest university updates</p>
              </div>

            </Link>

            <Link to="/documents" className="quick-card">

              <div className="quick-icon">
                <FileText size={22} />
              </div>

              <div>
                <h3>Documents</h3>
                <p>Academic resources</p>
              </div>

            </Link>

          </div>

          <div className="dashboard-columns">

            <div className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <h2>Today's Classes</h2>
                  <span>Wednesday, 08 October 2026</span>
                </div>

                <CalendarDays size={20} />

              </div>

              <div className="class-item">

                <div className="class-time">
                  09:00 AM
                </div>

                <div className="class-details">
                  <strong>Web Technology</strong>
                  <span>Room 204</span>
                </div>

              </div>

              <div className="class-item">

                <div className="class-time">
                  10:00 AM
                </div>

                <div className="class-details">
                  <strong>Distributed Systems</strong>
                  <span>Room 301</span>
                </div>

              </div>

              <div className="class-item">

                <div className="class-time">
                  11:30 AM
                </div>

                <div className="class-details">
                  <strong>Data Science</strong>
                  <span>Lab 2</span>
                </div>

              </div>

            </div>

            <div className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <h2>Recent Notices</h2>
                  <span>Latest campus updates</span>
                </div>

                <Bell size={20} />

              </div>

              <div className="notice-item">

                <div className="notice-dot"></div>

                <div>
                  <strong>
                    End Semester Examination Schedule Released
                  </strong>

                  <span>
                    08 October 2026
                  </span>
                </div>

              </div>

              <div className="notice-item">

                <div className="notice-dot"></div>

                <div>
                  <strong>
                    Assignment Submission Deadline
                  </strong>

                  <span>
                    07 October 2026
                  </span>
                </div>

              </div>

              <div className="notice-item">

                <div className="notice-dot"></div>

                <div>
                  <strong>
                    Campus Maintenance Notice
                  </strong>

                  <span>
                    06 October 2026
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;