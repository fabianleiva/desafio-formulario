const Alert = ({ error }) => {
  return (
    <>
      <div>
        <p>{error.message}</p>
      </div>
    </>
  );
};
export default Alert;
