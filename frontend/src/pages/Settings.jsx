import {
  Settings as SettingsIcon,
  User,
  Bell,
  Globe,
  Shield,
  ChevronRight
} from "lucide-react";

import Sidebar from "../components/Sidebar";

import "./Dashboard.css";
import "./Settings.css";

function Settings() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h2>Settings</h2>
            <p>Manage your account and preferences</p>
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

        <section className="settings-page">

          <div className="settings-container">

            <div className="settings-heading">

              <span className="schedule-label">
                SETTINGS
              </span>

              <h1>
                Account Preferences
              </h1>

              <p>
                Manage your profile, notifications and application preferences.
              </p>

            </div>

            <div className="settings-panel">

              <div className="settings-panel-header">

                <div className="settings-panel-icon">
                  <User size={20} />
                </div>

                <div>
                  <h3>Profile</h3>
                  <p>Your academic account information</p>
                </div>

              </div>

              <div className="profile-header">

                <div className="large-avatar">
                  AD
                </div>

                <div>
                  <h2>Akashdeep Das</h2>

                  <p>
                    Student • Computer Science & Engineering
                  </p>
                </div>

              </div>

              <div className="profile-grid">

                <div>
                  <span>Full Name</span>
                  <strong>Akashdeep Das</strong>
                </div>

                <div>
                  <span>Role</span>
                  <strong>Student</strong>
                </div>

                <div>
                  <span>Department</span>
                  <strong>
                    Computer Science & Engineering
                  </strong>
                </div>

              </div>

            </div>

            <div className="settings-panel">

              <div className="settings-panel-header">

                <div className="settings-panel-icon">
                  <Bell size={20} />
                </div>

                <div>
                  <h3>Notifications</h3>
                  <p>
                    Choose which updates you want to receive
                  </p>
                </div>

              </div>

              <div className="settings-row">

                <div>
                  <strong>University Notices</strong>

                  <span>
                    Receive important campus announcements
                  </span>
                </div>

                <label className="toggle">

                  <input
                    type="checkbox"
                    defaultChecked
                  />

                  <span className="toggle-slider"></span>

                </label>

              </div>

              <div className="settings-row">

                <div>
                  <strong>Schedule Updates</strong>

                  <span>
                    Get notified when your class schedule changes
                  </span>
                </div>

                <label className="toggle">

                  <input
                    type="checkbox"
                    defaultChecked
                  />

                  <span className="toggle-slider"></span>

                </label>

              </div>

            </div>

            <div className="settings-panel">

              <div className="settings-panel-header">

                <div className="settings-panel-icon">
                  <Globe size={20} />
                </div>

                <div>
                  <h3>Language</h3>

                  <p>
                    Choose your preferred assistant language
                  </p>
                </div>

              </div>

              <div className="settings-row">

                <div>
                  <strong>Application Language</strong>

                  <span>
                    Language used throughout the application
                  </span>
                </div>

                <select className="settings-select">

                  <option>English</option>
                  <option>Hindi</option>
                  <option>Assamese</option>

                </select>

              </div>

            </div>

            <div className="settings-panel">

              <div className="settings-panel-header">

                <div className="settings-panel-icon">
                  <Shield size={20} />
                </div>

                <div>
                  <h3>Security</h3>

                  <p>
                    Manage your account security
                  </p>
                </div>

              </div>

              <button className="security-row">

                <div>
                  <strong>
                    Password & Account Security
                  </strong>

                  <span>
                    Manage your account security settings
                  </span>
                </div>

                <ChevronRight size={20} />

              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Settings;