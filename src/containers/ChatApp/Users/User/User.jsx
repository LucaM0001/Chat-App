import DefaultProfil from "../../../../assets/img/upload/default.png";

const User = (props) => {
  const otherUserProfileStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  };
  return (
    <>
      <li className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div>
            <img
              src={DefaultProfil}
              alt="otherUserProfile"
              style={otherUserProfileStyle}
            />
          </div>
          <div className="ps-4">
            <div className="fw-bold">Autre UTILISATEUR</div>
            <div>Dernière message envoyé</div>
          </div>
        </div>
        <div className="text-success">
          <i className="bi bi-circle-fill" style={{ fontSize: "10px" }}></i>
        </div>
      </li>
      <hr />
    </>
  );
};

export default User;
