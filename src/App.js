import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (username === "Gerges" && password === "1995") {
        setLoggedIn(true);
      } else {
        throw Error;
      }
    } catch (error) {
      setError("incorrect username or password");
    }
  };

  return (
    <>
      <h1 className="text-center font-semibold text-3xl mt-2 py-4">
        useReducer Simple Login Form
      </h1>

      <form
        className="flex flex-col items-center justify-center gap-4 mt-4 py-2"
        onSubmit={handleSubmit}
      >
        <input
          className="border rounded-lg px-2 py-1"
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border rounded-lg px-2 py-1"
          type="password"
          autoComplete="current-password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white text-lg 
        font-medium rounded-lg py-1 px-3"
          type="submit"
        >
          Log in
        </button>
      </form>
    </>
  );
}

export default App;
