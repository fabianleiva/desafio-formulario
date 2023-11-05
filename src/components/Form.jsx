import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dataValidation = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirmation === ""
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    if (password !== passwordConfirmation) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }
    setError(false);
    setPasswordError(false);
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <>
      <form className="form" onSubmit={dataValidation}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="text"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <label>Confirmar tu contraseña</label>
          <input
            type="text"
            name="password confirmation"
            className="form-control"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        {passwordError ? <p>Contraseñas no coinciden</p> : null}
      </form>
    </>
  );
};
export default Form;
