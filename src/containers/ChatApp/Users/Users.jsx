import { useParams } from "react-router-dom";
import AbasProfil from "../../../assets/img/upload/abas.png";
import BobProfil from "../../../assets/img/upload/bob.png";
import DefaultProfil from "../../../assets/img/upload/default.png";
import EkramProfil from "../../../assets/img/upload/ekram.jpg";
import EliasProfil from "../../../assets/img/upload/elias.jpg";
import IbroProfil from "../../../assets/img/upload/ibro.png";
import JohnProfil from "../../../assets/img/upload/john.jpg";
import kerenProfil from "../../../assets/img/upload/keren.jpeg";
import MathieuProfil from "../../../assets/img/upload/mathieu.png";
import NickProfil from "../../../assets/img/upload/nick.png";
import Button from "../../../components/Button/Button";
import User from "./User/User";
import Modal from "../../../components/Modal/Modal";
import "./Users.css";
import { useState } from "react";

const Users = (props) => {
  const { id } = useParams();
  const currentUser = props.users.find((user) => user.id === Number(id));

  const userProfileStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };

  let profilePicture = "";
  switch (currentUser.profilePicture) {
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

  return (
    <div id="users" className="w-75">
      {props.isLogOut && (
        <Modal
          title="Déconnexion ?"
          confirm={() => props.confirmLogOut(id)}
          denied={props.deniedLogOut}
        >
          Souhaiter-vous vraiment vous déconnecter ?
        </Modal>
      )}
      <div
        id="header"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <div>
            <img
              className="shadow"
              src={profilePicture}
              alt={id}
              style={userProfileStyle}
            />
            <label htmlFor="newProfilePicture">
              <i className="bi bi-camera-fill"></i>
            </label>
            <input
              type="file"
              id="newProfilePicture"
              className="d-none"
              onChange={(e) =>
                props.changeProfilePicture(e.currentTarget.value, Number(id))
              }
            />
          </div>
          <div className="ms-4">
            <h3>{`${currentUser.firstname} ${currentUser.lastname}`}</h3>
            <div
              className={`${
                currentUser.status ? "text-success" : "text-dark-emphasis"
              } text-success fw-bold`}
            >
              {currentUser.status ? "Online" : "Offline"}
            </div>
          </div>
        </div>
        <Button color="btn-dark" type="button" clic={props.logOut}>
          <i className="bi bi-door-open-fill"></i> Déconnexion
        </Button>
      </div>
      <hr />
      <div id="search" className="my-4">
        <div className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            name="searchInput"
            id="searchInput"
            disabled
            placeholder="Effectuer une recherche..."
            onKeyUp={(e) => props.search(e.target.value)}
          />
          <Button
            color="btn-primary"
            clic={() =>
              props.enableSeach(document.getElementById("searchInput"))
            }
          >
            <i className="bi bi-search"></i>
          </Button>
        </div>
      </div>
      <div id="body" style={{ height: "400px", overflow: "auto" }}>
        <ul id="user-list">
          {props.isSearch
            ? props.usersFound.map((user) => (
                <User
                  senderID={Number(id)}
                  key={user.id}
                  receiverID={user.id}
                  {...user}
                  messages={props.messages}
                />
              ))
            : props.users.map((user) => (
                <User
                  senderID={Number(id)}
                  key={user.id}
                  receiverID={user.id}
                  {...user}
                  messages={props.messages}
                />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
