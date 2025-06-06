import React, { useState } from "react";
import "./SignInPage.css";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Sign in with", { email, password });
    alert("Sign in successful!");
  };

  return (
    <div className="auth-card">
      <h1 className="title">CuraFinds</h1>
      <p className="subtitle">Discover personalized health insights for chronic conditions</p>
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignIn} className="auth-form">
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <button type="submit" className="submit-btn">
            Login
          </button>

          <p className="switch-text">
            Don't have an account?{" "}
            <span className="link" onClick={() => navigate("/signup")}>
              Sign up now.
            </span>
          </p>
        </div>
        
      </form>
    </div>
  );
};

export default SignInPage;
