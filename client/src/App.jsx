import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/")
      .then(res => setMessage(res.data))
      .catch(err => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to My MERN App Frontend 🚀</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
