import { useParams } from "react-router-dom";
import Styles from "./Chat.module.css";

import DefaultProfil from "../../../assets/img/upload/default.png";
import AbasProfil from "../../../assets/img/upload/abas.png";
import BobProfil from "../../../assets/img/upload/bob.png";
import EkramProfil from "../../../assets/img/upload/ekram.jpg";
import EliasProfil from "../../../assets/img/upload/elias.jpg";
import IbroProfil from "../../../assets/img/upload/ibro.png";
import JohnProfil from "../../../assets/img/upload/john.jpg";
import kerenProfil from "../../../assets/img/upload/keren.jpeg";
import MathieuProfil from "../../../assets/img/upload/mathieu.png";
import NickProfil from "../../../assets/img/upload/nick.png";

const Chat = (props) => {
  const { receiverID } = useParams();
  const users = props.users;
  const receiver = users.find((user) => user.id === Number(receiverID));

  let receiverProfilePicture = "";
  switch (receiver.profilePicture) {
    case "abas.png":
      receiverProfilePicture = AbasProfil;
      break;
    case "bob.png":
      receiverProfilePicture = BobProfil;
      break;
    case "default.png":
      receiverProfilePicture = DefaultProfil;
      break;
    case "ekram.jpg":
      receiverProfilePicture = EkramProfil;
      break;
    case "elias.jpg":
      receiverProfilePicture = EliasProfil;
      break;
    case "ibro.png":
      receiverProfilePicture = IbroProfil;
      break;
    case "john.jpg":
      receiverProfilePicture = JohnProfil;
      break;
    case "keren.jpeg":
      receiverProfilePicture = kerenProfil;
      break;
    case "mathieu.png":
      receiverProfilePicture = MathieuProfil;
      break;
    case "nick.png":
      receiverProfilePicture = NickProfil;
      break;
    default:
      null;
  }

  const sendedUserProfilStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  };
  const senderUserProfilStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  };
  return (
    <div id="chat" className="w-75">
      <div
        id="head"
        className="d-flex justify-content-between align-items-center mb-4"
      >
        <div className="d-flex align-items-center">
          <div>
            <i
              className="bi bi-arrow-left fs-2"
              id={Styles.back}
              onClick={props.goBack}
            ></i>
          </div>
          <div className="d-flex align-items-center ms-3">
            <div className="me-3">
              <img
                src={receiverProfilePicture}
                alt="sendedUserProfil"
                style={sendedUserProfilStyle}
              />
            </div>
            <div>
              <h4>{`${receiver.firstname} ${receiver.lastname}`}</h4>
              <div
                className={`fw-bold ${
                  receiver.status ? "text-success" : "text-dark-emphasis"
                }`}
              >{`${receiver.status ? "Online" : "Offline"}`}</div>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-gear-fill fs-2"></i>
        </div>
      </div>

      <div
        id="body"
        className="px-4"
        style={{ height: "400px", overflow: "auto" }}
      >
        <div className="d-flex align-items-center">
          <div>
            <img
              src={receiverProfilePicture}
              alt="sendedUserProfil"
              style={senderUserProfilStyle}
            />
          </div>
          <div className={Styles.messageSended}>
            Porttitor netus parturient sociosqu orci diam interdum primis
            lacinia nostra dui, venenatis mus vestibulum mollis montes quis
            viverra taciti risus est pulvinar
          </div>
          <div className="text-center text-dark-emphasis">
            02/04/2024 . Mardi . 16:40
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center text-dark-emphasis">
            04/04/2024 . Jeudi . 22:18
          </div>
          <div className={Styles.messageReceived}>
            Ad curabitur porttitor proin tincidunt mi facilisi tellus ridiculus
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center text-dark-emphasis">
            04/04/2024 . Jeudi . 22:18
          </div>
          <div className={Styles.messageReceived}>
            Cursus natoque rhoncus viverra pulvinar congue tortor
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <img
              src={receiverProfilePicture}
              alt="sendedUserProfil"
              style={senderUserProfilStyle}
            />
          </div>
          <div className={Styles.messageSended}>
            Nisi lectus ut elementum libero molestie himenaeos ad rutrum mi
            malesuada
          </div>
          <div className="text-center text-dark-emphasis">
            10/04/2024 . Dimanche . 07:25
          </div>
        </div>
      </div>

      <div id="send" className="my-3">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="message"
            id="message"
            placeholder="email@gmail.com"
          />
          <span className="input-group-text">
            <i className="bi bi-send-fill"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
