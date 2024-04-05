const ReceivedMessage = (props) => {
  const receiverUserProfilStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  };

  return (
    <div className="d-flex align-items-center">
      <div>
        <img
          src={props.profilePicture}
          alt="senderUserProfil"
          style={receiverUserProfilStyle}
        />
      </div>
      <div className="messageReceived">{props.children}</div>
      <div className="text-center text-dark-emphasis">{props.time}</div>
    </div>
  );
};

export default ReceivedMessage;
