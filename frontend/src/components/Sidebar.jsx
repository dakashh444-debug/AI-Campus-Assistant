import {
  LayoutDashboard,
  Bot,
  CalendarDays,
  Bell,
  FileText,
  Settings,
  LogOut,
  Sparkles,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";

function Sidebar({ collapsed, onToggle }) {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <aside className={`sidebar ${collapsed ? "closed" : ""}`}>

      <div className="sidebar-logo">

        <div className="logo-icon">
          <Sparkles size={22} />
        </div>

        <div className="logo-text">
          <h2>AI Campus</h2>
          <span>Assistant</span>
        </div>

      </div>

      <button
        className="sidebar-toggle"
        type="button"
        onClick={onToggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? (
          <PanelLeftOpen size={19} />
        ) : (
          <PanelLeftClose size={19} />
        )}
      </button>

      <nav className="sidebar-nav">

        <NavLink to="/dashboard" className={getNavClass}>
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/assistant" className={getNavClass}>
          <Bot size={19} />
          <span>AI Assistant</span>
        </NavLink>

        <NavLink to="/schedule" className={getNavClass}>
          <CalendarDays size={19} />
          <span>Schedule</span>
        </NavLink>

        <NavLink to="/notices" className={getNavClass}>
          <Bell size={19} />
          <span>Notices</span>
        </NavLink>

        <NavLink to="/documents" className={getNavClass}>
          <FileText size={19} />
          <span>Documents</span>
        </NavLink>

        <NavLink to="/settings" className={getNavClass}>
          <Settings size={19} />
          <span>Settings</span>
        </NavLink>

      </nav>

      <div className="sidebar-bottom">

        <Link to="/" className="nav-link logout">
          <LogOut size={19} />
          <span>Logout</span>
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;