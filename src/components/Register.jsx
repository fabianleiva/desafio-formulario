import Form from "./Form";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

const Register = ({error, setError, passwordError, setPasswordError, success, setSuccess}) => {
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
        <SocialButton facebook="facebook" github="github" linkedin="linkedin" />
        <span>O usa tu correo para registrarte</span>
        <Form setError={setError} setPasswordError={setPasswordError} setSuccess={setSuccess}/>
        <Alert error={error} passwordError={passwordError} success={success}/>
      </div>
    </>
  );
};
export default Register;
