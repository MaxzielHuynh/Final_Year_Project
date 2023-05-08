import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const despatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(despatch, { username, password });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 30 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 30 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{ padding: 10, marginBottom: 30, width: 200 }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
