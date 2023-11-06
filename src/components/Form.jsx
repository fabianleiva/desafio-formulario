import { useState } from "react";

const Form = ({ setError }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const validation = (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirmation } = formData;
    const dataValidation =
      !name || !email || !password || !passwordConfirmation;
    const passwordValidation = password !== passwordConfirmation;
    const emailValidation = email.indexOf("@");

    if (dataValidation) {
      setError({
        error: true,
        message: "Completa todos los campos!",
        color: "text-danger",
      });
      return;
    } else {
      setError({
        error: false,
        message: "Registro exitoso!",
        color: "text-success",
      });
    }

    if (passwordValidation) {
      setError({
        error: true,
        message: "El password no coincide!",
        color: "text-danger",
      });
      return;
    }

    if (emailValidation >= 0) {
      null;
    } else {
      setError({
        error: true,
        message: "Ingresa un correo válido!",
        color: "text-danger",
      });
      return;
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });
  };

  const setChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="form" onSubmit={(e) => validation(e)}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={setChanges}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={setChanges}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={setChanges}
            value={formData.password}
          />
        </div>
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="passwordConfirmation"
            className="form-control"
            onChange={setChanges}
            value={formData.passwordConfirmation}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </>
  );
};
export default Form;
