import {
  FileText,
  Search,
  Upload,
  FolderOpen
} from "lucide-react";

import Sidebar from "../components/Sidebar";

import "./Dashboard.css";

function Documents() {
  const documents = [
    {
      name: "B.Tech CSE Examination Schedule",
      type: "PDF",
      size: "2.4 MB",
      category: "Examination"
    },
    {
      name: "Web Technology Course Syllabus",
      type: "PDF",
      size: "1.8 MB",
      category: "Academic"
    },
    {
      name: "University Academic Calendar 2026",
      type: "PDF",
      size: "3.1 MB",
      category: "Academic"
    }
  ];

  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h2>Documents</h2>
            <p>
              Access university academic and administrative documents
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
                  UNIVERSITY DOCUMENTS
                </span>

                <h1>
                  Documents
                </h1>

                <p>
                  Browse important academic and campus documents.
                </p>

              </div>

              <div className="schedule-calendar-icon">
                <FolderOpen size={30} />
              </div>

            </div>

            <div className="document-toolbar">

              <div className="document-search">

                <Search size={18} />

                <input
                  type="text"
                  placeholder="Search documents..."
                />

              </div>

              <button className="document-upload-button">
                <Upload size={18} />
                Upload Document
              </button>

            </div>

            <div className="schedule-section">

              <div className="section-heading">
                <h2>Available Documents</h2>
              </div>

              <div className="document-grid">

                {documents.map((document, index) => (

                  <div
                    className="document-card"
                    key={index}
                  >

                    <div className="document-icon">
                      <FileText size={24} />
                    </div>

                    <div className="document-info">

                      <h3>
                        {document.name}
                      </h3>

                      <p>
                        {document.category}
                      </p>

                      <span>
                        {document.type} • {document.size}
                      </span>

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

export default Documents;