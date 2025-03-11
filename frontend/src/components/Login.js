import React, { useState } from "react";

function Login({ setUsername }) {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Username</h2>
      <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setUsername(name)}>Join Chat</button>
    </div>
  );
}

export default Login;
