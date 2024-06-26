import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import LoginForm from "./containers/Forms/LoginForm/LoginForm";
import SignUpForm from "./containers/Forms/SignUpForm/SignUpForm";
import Chat from "./containers/ChatApp/Chat/Chat";
import ForgotPassword from "./containers/Forms/ForgotPassword/ForgotPassword";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Users from "./containers/ChatApp/Users/Users.jsx";

const App = (props) => {
  /* Inscription réussi ? */
  const [isSignedIn, setIsSignedIn] = useState(false);

  /* Connexion réussi ? */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* Adresse email déja utilisé ? */
  const [isEmailUsed, setIsEmailUsed] = useState(false);

  /* Mot de passe indentique  */
  const [isSamePassword, setIsSamePassword] = useState(false);

  /* Image valide */
  const [isNotValidImage, setIsNotValidImage] = useState(false);

  /* Déconnexion */
  const [isLogOut, setIsLogOut] = useState(false);

  /* Recherche */
  const [isSearch, setIsSearch] = useState(false);

  /* Navigation */
  const navigate = useNavigate();

  /* Utilisateurs */
  const [users, setUsers] = useState([
    {
      id: Date.now(),
      firstname: "User",
      lastname: "DEFAULT",
      email: "defaultUser@gmail.com",
      password: "00000000",
      confirmPassword: "00000000",
      profilePicture: "default.png",
      status: false,
    },
  ]);

  /* Utilisateurs trouvé */
  const [usersFound, setUsersFound] = useState([
    {
      id: Date.now(),
      message: "Default message",
      senderID: Date.now(),
      receiverID: Date.now(),
    },
  ]);

  /* Fonction de récupération de date */
  const getMessageTime = () => {
    const d = new Date();
    const daysArray = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    const date = d.toLocaleDateString();
    const time = d.toLocaleTimeString();
    const day = daysArray[d.getDay()];

    return [date, day, time].join(" . ");
  };

  /* Messages */
  const [messages, setMesssages] = useState([]);

  /* Inscription */
  const handleSignUp = (newUser) => {
    const isAlreadySigned = users.find((user) => user.email === newUser.email)
      ? true
      : false;
    /* Adresse email ? */
    if (isAlreadySigned === false) {
      setIsEmailUsed(false);
      /* Mot de passe ? */
      if (newUser.password === newUser.confirmPassword) {
        setIsSamePassword(false);
        /* Identifiant */
        newUser.id = Date.now();
        /* Photo de profil ? */
        const validImageExtension = ["png", "jpg", "jpeg"];
        if (newUser.profilePicture === "") {
          newUser.profilePicture = "default.png";
          setUsers((oldUsers) => [...oldUsers, newUser]);
          setIsSignedIn(true);
          navigate("/");
        } else {
          let profileFile = "";
          const profile = newUser.profilePicture;
          const profileArray = profile.split("\\");
          profileFile = profileArray[2];
          const profileFileExtension = profileFile.split(".").at(1);

          if (validImageExtension.includes(profileFileExtension)) {
            newUser.profilePicture = profileFile;
            setUsers((oldUsers) => [...oldUsers, newUser]);
            setIsSignedIn(true);
            navigate("/");
          } else setIsNotValidImage(true);
        }
      } else setIsSamePassword(true);
    } else setIsEmailUsed(true);
  };

  /* Connexion */
  const handleLogIn = (email, password) => {
    const newUsers = [...users];
    const isAlreadySigned = newUsers.find(
      (user) => user.email === email && user.password === password
    )
      ? true
      : false;

    if (isAlreadySigned) {
      const user = newUsers.find(
        (user) => user.email === email && user.password === password
      );
      const userID = newUsers.findIndex(
        (user) => user.email === email && user.password === password
      );

      user.status = true;
      newUsers[userID] = user;

      setUsers(newUsers);
      setIsLoggedIn(true);
      navigate(`/users/${user.id}`);
    } else
      alert(
        "Vous n'êtes pas encore inscrit || Adresse email ou Mot de passe incorrect"
      );
  };

  /* Mot de passe oublier */
  const handleForgotPassword = (email) => {
    const user = users.find((user) => user.email === email);
    navigate(`/forgotpassword/${user.id}`);
  };

  /* Retour en arrière */
  const handleGoBack = () => navigate(-1);

  /* Déconnexion */
  const handleLogOut = () => {
    setIsLogOut(true);
  };

  /* Confirmation déconnexion : Oui */
  const handleConfirmLogout = (id) => {
    const newUsers = [...users];
    const newUserID = newUsers.findIndex((user) => user.id === Number(id));
    const newUser = newUsers[newUserID];
    newUser.status = false;

    setUsers(newUsers);
    setIsLoggedIn(false);
    setIsSignedIn(false);
    setIsLogOut(false);
    navigate("/");
  };

  /* Réfus déconnexion : Nom */
  const handleDeniedLogout = () => {
    setIsLogOut(false);
  };

  /* Changement de profil */
  const handleChangeProfilePicture = (image, userId) => {
    if (image) {
      const newProfilePicture = image.split("\\").at(2);
      const newUsers = [...users];

      const newUser = newUsers.find((user) => user.id === Number(userId));
      newUser.profilePicture = newProfilePicture;

      const newUserIndex = newUsers.findIndex(
        (user) => user.id === Number(userId)
      );
      newUsers[newUserIndex] = newUser;

      setUsers(newUsers);
    }
  };

  /* Ajout de message */
  const handleAddMessage = (message, senderID, receiverID) => {
    const newMessages = [...messages];
    const newMessage = {
      id: Date.now(),
      message,
      senderID,
      receiverID,
      time: getMessageTime(),
    };

    setMesssages((oldMessages) => [...oldMessages, newMessage]);
  };

  /* Activation recherche */
  const handleEnableSeach = (input) => {
    if (input.disabled) input.disabled = false;
    else input.disabled = true;
  };

  /* Recherche */
  const handleSearch = (value) => {
    if (value) {
      setIsSearch(true);

      const usersFoundArray = users.filter(
        (user) =>
          user.firstname[0].toLocaleLowerCase() ===
            value[0].toLocaleLowerCase() ||
          user.firstname.toLocaleLowerCase() === value.toLocaleLowerCase()
      );

      setUsersFound(usersFoundArray);
    } else {
      setIsSearch(false);
      setUsersFound([]);
    }
  };

  return (
    <div className="container d-flex justify-content-center my-3">
      <Routes>
        {isLoggedIn === false && isLogOut === false ? (
          <Route
            path="/"
            element={
              <LoginForm
                forgotPassword={handleForgotPassword}
                logIn={handleLogIn}
                IsSignIn={isSignedIn}
              />
            }
          />
        ) : (
          <Route
            path="/users/:id"
            element={
              <Users
                users={users}
                messages={messages}
                usersFound={usersFound}
                isLogOut={isLogOut}
                confirmLogOut={handleConfirmLogout}
                deniedLogOut={handleDeniedLogout}
                logOut={handleLogOut}
                changeProfilePicture={handleChangeProfilePicture}
                enableSeach={handleEnableSeach}
                search={handleSearch}
                isSearch={isSearch}
              />
            }
          />
        )}

        <Route
          path="/signup"
          element={
            <SignUpForm
              isEmailUsed={isEmailUsed}
              isSamePassword={isSamePassword}
              isNotValidImage={isNotValidImage}
              signUp={handleSignUp}
            />
          }
        />

        <Route
          path="/forgotpassword/:id"
          element={<ForgotPassword goBack={handleGoBack} users={users} />}
        />

        <Route
          path="/chat/:receiverID/:senderID"
          element={
            <Chat
              goBack={handleGoBack}
              addMessage={handleAddMessage}
              users={users}
              messages={[...messages]}
            />
          }
        />

        {!isLoggedIn && <Route path="*" element={<Navigate to="/" />} />}
        <Route path="/modal" Component={Modal} />
      </Routes>
    </div>
  );
};

export default App;
