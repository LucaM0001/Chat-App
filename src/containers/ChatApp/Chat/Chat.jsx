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

import { withFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

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
        className="px-4 shadow mb-3 rounded-4"
        style={{ height: "420px", overflow: "auto" }}
      >
        <ReceivedMessage
          profilePicture={receiverProfilePicture}
          time="10/10/10 . Lundi . 10:10:10"
        >
          test
        </ReceivedMessage>
        <SentMessage time="10/10/10 . Lundi . 10:10:10">test</SentMessage>
      </div>

      <div id="sendInput" className="shadow p-2 rounded-4">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="message"
            id="message"
            placeholder="Message..."
            value={props.values.message}
            onChange={props.handleChange}
          />
          <span className="input-group-text">
            <i className="bi bi-send-fill" onClick={props.handleSubmit}></i>
          </span>
        </div>
        {props.touched.message && props.errors.message && (
          <span style={{ color: "red" }}>{props.errors.message}</span>
        )}
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      message: "",
    };
  },
  validationSchema: Yup.object().shape({
    message: Yup.string().required("Veuillez saisir votre message !"),
  }),
  handleSubmit: (values, { props }) => {
    props.addMessage(values.message, senderID, receiverID);
  },
})(Chat);
