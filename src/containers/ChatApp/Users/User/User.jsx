import { Link } from "react-router-dom";
import AbasProfil from "../../../../assets/img/upload/abas.png";
import BobProfil from "../../../../assets/img/upload/bob.png";
import DefaultProfil from "../../../../assets/img/upload/default.png";
import EkramProfil from "../../../../assets/img/upload/ekram.jpg";
import EliasProfil from "../../../../assets/img/upload/elias.jpg";
import IbroProfil from "../../../../assets/img/upload/ibro.png";
import JohnProfil from "../../../../assets/img/upload/john.jpg";
import kerenProfil from "../../../../assets/img/upload/keren.jpeg";
import MathieuProfil from "../../../../assets/img/upload/mathieu.png";
import NickProfil from "../../../../assets/img/upload/nick.png";

const User = (props) => {
  const otherUserProfileStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  };

  let profilePicture = "";
  switch (props.profilePicture) {
    case "abas.png":
      profilePicture = AbasProfil;
      break;
    case "bob.png":
      profilePicture = BobProfil;
      break;
    case "default.png":
      profilePicture = DefaultProfil;
      break;
    case "ekram.jpg":
      profilePicture = EkramProfil;
      break;
    case "elias.jpg":
      profilePicture = EliasProfil;
      break;
    case "ibro.png":
      profilePicture = IbroProfil;
      break;
    case "john.jpg":
      profilePicture = JohnProfil;
      break;
    case "keren.jpeg":
      profilePicture = kerenProfil;
      break;
    case "mathieu.png":
      profilePicture = MathieuProfil;
      break;
    case "nick.png":
      profilePicture = NickProfil;
      break;
    default:
      null;
  }

  const concernedMessages = props.messages.filter(
    (msg) =>
      (msg.senderID === props.senderID &&
        msg.receiverID === props.receiverID) ||
      (msg.senderID === props.receiverID && msg.receiverID === props.senderID)
  );

  console.log(concernedMessages);

  let lastMessage,
    lastMsg = "",
    prefix = "You : ";

  if (concernedMessages.length > 0) {
    lastMessage = concernedMessages.at(-1);

    if (
      lastMessage.senderID === props.senderID &&
      lastMessage.receiverID === props.receiverID
    ) {
      lastMsg = (
        <span>
          <span className="text-primary">{prefix}</span>
          {lastMessage.message}
        </span>
      );
      if (lastMsg.length >= 25) lastMsg = lastMsg.concat("...");
    } else if (
      lastMessage.senderID === props.receiverID &&
      lastMessage.receiverID === props.senderID
    ) {
      lastMsg = lastMessage.message.slice(0, 25);
      if (lastMsg.length >= 25) lastMsg = lastMsg.concat("...");
    }
  } else lastMsg = "Aucun message envoyé";

  return (
    <Link
      to={`/chat/${props.receiverID}/${props.senderID}`}
      className="nav-link"
    >
      <li className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div>
            <img
              className="shadow"
              src={profilePicture}
              alt="otherUserProfile"
              style={otherUserProfileStyle}
            />
          </div>
          <div className="ps-4">
            <h5 className="fw-bold">{`${props.firstname} ${props.lastname}`}</h5>
            <div>{lastMsg}</div>
          </div>
        </div>
        <div
          className={`${props.status ? "text-success" : "text-dark-emphasis"}`}
        >
          <i className="bi bi-circle-fill" style={{ fontSize: "10px" }}></i>
        </div>
      </li>
      <hr />
    </Link>
  );
};

export default User;
