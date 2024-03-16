import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <main className="login-container">
      <form>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your Password"
          required
        />

        <button className="submit" type="submit">
          Login
        </button>
      </form>
      <div className="register-instead">
        <p>Don't have an account?</p>
        <button className="user-button">
          <a href="/create-account">Create Account</a>
        </button>
      </div>
    </main>
  );
};

export default Login;
