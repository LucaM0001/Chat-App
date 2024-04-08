import { useParams } from "react-router-dom";

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

import "./Chat.css";
import ReceivedMessage from "./Messages/ReceivedMessage/ReceivedMessage";
import SentMessage from "./Messages/SentMessage/SentMessage";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import { useEffect, useState } from "react";

const Chat = (props) => {
  const { receiverID, senderID } = useParams();

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

  return (
    <div id="chat" className="w-75">
      <div
        id="head"
        className="d-flex justify-content-between align-items-center mb-3 shadow p-2 rounded-4"
      >
        <div className="d-flex align-items-center">
          <div>
            <i
              className="bi bi-arrow-left fs-2"
              id="back"
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
              <h4>{receiver.firstname + " " + receiver.lastname}</h4>
              <div className={`fw-bold`}>
                {receiver.status ? "Online" : "Offline"}
              </div>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-gear-fill fs-2"></i>
        </div>
      </div>

      <div
        id="body"
        className="px-4 shadow mb-3 rounded-4 mb-3"
        style={{ height: "400px", overflow: "auto" }}
      >
        {props.messages
          .filter(
            (msg) =>
              (msg.senderID === Number(senderID) &&
                msg.receiverID === Number(receiverID)) ||
              (msg.senderID === Number(receiverID) &&
                msg.receiverID === Number(senderID))
          )
          .map((msg) => {
            const case1 =
              msg.senderID === Number(senderID) &&
              msg.receiverID === Number(receiverID);
            const case2 =
              msg.senderID === Number(receiverID) &&
              msg.receiverID === Number(senderID);

            if (case1)
              return (
                <SentMessage key={msg.id} time={msg.time}>
                  {msg.message}
                </SentMessage>
              );
            else if (case2)
              return (
                <ReceivedMessage
                  key={msg.id}
                  time={msg.time}
                  profilePicture={receiverProfilePicture}
                >
                  {msg.message}
                </ReceivedMessage>
              );
          })}
      </div>

      <div id="sendInput" className="shadow p-2 rounded-4">
        <SendMessageForm
          senderID={Number(senderID)}
          receiverID={Number(receiverID)}
          addMessage={props.addMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
