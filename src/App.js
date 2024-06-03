import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <h1 className="text-center font-semibold text-3xl mt-2 py-4">
        useReducer Simple Login Form
      </h1>

      <form className="">
        <input
          className=""
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text" />
      </form>
    </>
  );
}

export default App;
