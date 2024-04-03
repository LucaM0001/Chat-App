const Alert = (props) => {
  return (
    <div className={`alert ${props.color} text-center`}>{props.children}</div>
  );
};

export default Alert;
