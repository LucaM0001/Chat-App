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

const Users = (props) => {
  const { id } = useParams();
  const users = props.users;
  const currentUser = users.find((user) => user.id === Number(id));

  const userProfileStyle = {
    width: "60px",
    height: "60px",
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
          confirmLogOut={props.confirmLogOut}
          deniedLogout={props.deniedLogOut}
        />
      )}
      <div
        id="header"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <div>
            <img src={profilePicture} alt={id} style={userProfileStyle} />
          </div>
          <div className="ms-4">
            <h4>{`${currentUser.firstname} ${currentUser.lastname}`}</h4>
            <div className="text-dark-emphasis">Active</div>
          </div>
        </div>
        <Button color="btn-dark" type="button" clic={props.logOut}>
          <i className="bi bi-door-open-fill"></i> Déconnexion
        </Button>
      </div>
      <hr />
      <div id="search" className="my-4">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            className="form-control"
            type="search"
            name="password"
            id="password"
            placeholder="Effectuer une recherche..."
          />
        </div>
      </div>
      <div id="body" style={{ height: "400px", overflow: "auto" }}>
        <ul>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
