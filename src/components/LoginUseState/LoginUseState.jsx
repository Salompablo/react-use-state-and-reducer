import React, { useState } from "react";
import { login } from "./login";

export default function LoginUseState() {
  const [username, setUserName] = useState(""); //input
  const [password, setPassword] = useState(""); // input
  const [isLoading, setIsLoading] = useState(false); // mostrar mensaje en el botón mientras se carga la petición
  const [error, setError] = useState(""); // mostrar mensaje de error
  const [isLoggedIn, setIsLoggedIn] = useState(false); // mostrar login

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError("Incorret username or password...");
      setUserName("");
      setPassword("");
    }

    setIsLoading(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Hola {username}</h1>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setIsLoading(false);
              setUserName("");
              setPassword("");
            }}
          >
            Log out
          </button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <p>Please login!</p>
          <input
            type='text'
            value={username}
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>{isLoading ? "Logging in..." : "Login"}</button>
        </form>
      )}
    </div>
  );
}
