import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assistant from "./pages/Assistant";
import Schedule from "./pages/Schedule";
import Notices from "./pages/Notices";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/assistant" element={<Assistant />} />

        <Route path="/schedule" element={<Schedule />} />

        <Route path="/notices" element={<Notices />} />

        <Route path="/documents" element={<Documents />} />

        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;