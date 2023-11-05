import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register";
import Background from "./components/Background";
import { useState } from "react";

function App() {
  const [error, setError] = useState("");

  return (
    <>
      <Register error={error} setError={setError} />
      <Background />
    </>
  );
}
export default App;
