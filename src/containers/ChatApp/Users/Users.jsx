import defaultProfil from "../../../assets/img/upload/default.png";
import Button from "../../../components/Button/Button";
import User from "./User/User";

const Users = (props) => {
  const userProfileStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  };

  return (
    <div id="users" className="w-75">
      <div
        id="header"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <div>
            <img
              src={defaultProfil}
              alt="userProfile"
              style={userProfileStyle}
            />
          </div>
          <div className="ms-4">
            <h4>Utilisateur ACTUEL</h4>
            <div className="text-dark-emphasis">Active</div>
          </div>
        </div>
        <Button color="btn-dark" type="button">
          Déconnexion
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
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </ul>
      </div>
    </div>
  );
};

export default Users;
