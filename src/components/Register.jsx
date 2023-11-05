import Form from "./Form";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

const Register = () => {
  return (
    <>
      <div
        id="container"
        style={{
          position: "relative",
          zIndex: "3",
        }}
      >
        <h3>CREA UNA CUENTA</h3>
        <span>O usa tu correo para registrarte</span>
        <Form />
      </div>
    </>
  );
};
export default Register;
