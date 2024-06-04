import { useReducer, useState } from "react";

const logInReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "logIn": {
      return {
        ...state,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        loggedIn: true,
        password: "",
      };
    }
    case "error": {
      return {
        ...state,
        error: "incorrect username or password",
        loggedIn: false,
        username: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [error, setError] = useState("");
  const [state, dispatch] = useReducer(logInReducer, {
    username: "",
    password: "",
    loggedIn: false,
    error: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError("");
    dispatch({ type: "logIn" });
    try {
      if (state.username === "Gerges" && state.password === "1995") {
        // setLoggedIn(true);
        // setUsername("");
        // setPassword("");
        dispatch({ type: "success" });
      } else {
        throw Error;
      }
    } catch (error) {
      dispatch({ type: "error" });
      // setError("incorrect username or password");
      // setUsername("");
      // setPassword("");
    }
  };

  return (
    <>
      <h1 className="text-center font-semibold text-3xl mt-2 py-4">
        useReducer Simple Login Form
      </h1>
      <hr />
      <div className="">
        {state.loggedIn ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-blue-600 text-center font-semibold text-2xl">
              Welcom {state.username}
            </p>

            <button
              className="bg-red-500 text-white text-lg 
              font-medium rounded-lg py-1 px-3"
              onClick={() => dispatch({ type: "logOut" })}
            >
              Log out
            </button>
          </div>
        ) : (
          <form
            className="flex flex-col items-center justify-center gap-4 mt-4 py-2"
            onSubmit={handleSubmit}
          >
            <input
              className="border rounded-lg px-2 py-1"
              type="text"
              autoComplete="username"
              placeholder="Username"
              value={state.username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.target.value,
                })
              }
            />
            <input
              className="border rounded-lg px-2 py-1"
              type="password"
              autoComplete="current-password"
              placeholder="password"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.target.value,
                })
              }
            />

            <button
              className="bg-blue-500 text-white text-lg 
        font-medium rounded-lg py-1 px-3"
              type="submit"
            >
              Log in
            </button>

            <p className="text-red-500 text-center">{state.error}</p>
          </form>
        )}
      </div>
    </>
  );
}

export default App;
