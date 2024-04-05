const SentMessage = (props) => {
  return (
    <div className="d-flex align-items-center">
      <div className="messageSended">{props.children}</div>
      <div className="text-center text-dark-emphasis">{props.time}</div>
    </div>
  );
};

export default SentMessage;
