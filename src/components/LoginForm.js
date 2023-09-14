import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage("Both username and password are required.");
    } else {
      setErrorMessage("");
      // Perform actual login logic here...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </p>
      {errorMessage && (
        <p id="errorMessage" style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
