const Button = (props) => {
  return (
    <button
      className={`btn ${props.color} ${props.css}`}
      type={props.type}
      onClick={props.clic}
    >
      {props.children}
    </button>
  );
};

export default Button;
