import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { isLoggedIn, userName, role, login, logout } =
    useContext(AuthContext);

  const [name, setName] = useState("");
  const [selectedRole, setSelectedRole] = useState("user"); // IMPORTANT

  if (isLoggedIn) {
    return (
      <>
        <h3>Welcome, {userName}</h3>
        <p>Logged in as: {role.toUpperCase()}</p>
        <button onClick={logout}>Logout</button>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select
        value={selectedRole}
        onChange={e => setSelectedRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={() => {
          console.log("LOGIN ROLE:", selectedRole); // DEBUG LINE
          login(name, selectedRole);
        }}
      >
        Login
      </button>
    </>
  );
}
