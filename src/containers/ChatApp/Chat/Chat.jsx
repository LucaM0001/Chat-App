import DefaultProfil from "../../../assets/img/upload/default.png";
import Classes from "./Chat.module.css";

const Chat = (props) => {
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
            <i className="bi bi-arrow-left fs-2"></i>
          </div>
          <div className="d-flex align-items-center ms-3">
            <div className="me-3">
              <img
                src={DefaultProfil}
                alt="sendedUserProfil"
                style={sendedUserProfilStyle}
              />
            </div>
            <div>
              <div>Sended USER</div>
              <div>Offline</div>
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
              src={DefaultProfil}
              alt="sendedUserProfil"
              style={senderUserProfilStyle}
            />
          </div>
          <div className={Classes.messageSended}>
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
          <div className={Classes.messageReceived}>
            Ad curabitur porttitor proin tincidunt mi facilisi tellus ridiculus
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="text-center text-dark-emphasis">
            04/04/2024 . Jeudi . 22:18
          </div>
          <div className={Classes.messageReceived}>
            Cursus natoque rhoncus viverra pulvinar congue tortor
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <img
              src={DefaultProfil}
              alt="sendedUserProfil"
              style={senderUserProfilStyle}
            />
          </div>
          <div className={Classes.messageSended}>
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
            type="email"
            name="email"
            id="email"
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
