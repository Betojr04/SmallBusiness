import React from "react";
import "../styles/createAccount.css";

const CreateAccount = () => {
  return (
    <main className="container">
      <form className="form">
        <label htmlFor="first-name">First Name * </label>
        <input type="text" required placeholder="First Name" />

        <label htmlFor="first-name">Last Name: *</label>
        <input type="text" required placeholder="Last Name" />

        <label htmlFor="first-name">Email Address * </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="email@example.com"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
        />

        <label htmlFor="passowrd">Password * </label>
        <input
          type="password"
          required
          placeholder="unique password"
          id="password"
          name="password"
        />

        <button className="submit" type="submit">
          Create Account
        </button>
      </form>
      <div className="user">
        <p>Already have an account?</p>
        <button className="user-button">
          <a href="/login">Login</a>
        </button>
      </div>
    </main>
  );
};

export default CreateAccount;
