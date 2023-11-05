import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register";
import Background from "./components/Background";
import { useState } from "react";

function App() {
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Register
        error={error}
        setError={setError}
        passwordError={passwordError}
        setPasswordError={setPasswordError}
        success={success}
        setSuccess={setSuccess}
      />
      <Background />
    </>
  );
}
export default App;
