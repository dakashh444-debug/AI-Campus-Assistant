import { GraduationCap, Lock, Mail } from "lucide-react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <GraduationCap size={32} />
        </div>

        <h1>AI Campus Assistant</h1>

        <p className="login-subtitle">
          Your intelligent academic and campus assistant
        </p>

        <form>

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <Mail size={18} />

              <input
                type="email"
                placeholder="Enter your university email"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <Lock size={18} />

              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button className="login-button" type="submit">
            Sign In
          </button>

        </form>

        <p className="login-footer">
          AI Campus Assistant © 2026
        </p>

      </div>

    </div>
  );
}

export default Login;