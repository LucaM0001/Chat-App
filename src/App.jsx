import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import LoginForm from "./containers/Forms/LoginForm/LoginForm";
import SignUpForm from "./containers/Forms/SignUpForm/SignUpForm";
import Users from "./containers/ChatApp/Users/Users";
import Chat from "./containers/ChatApp/Chat/Chat";
import ForgotPassword from "./containers/Forms/ForgotPassword/ForgotPassword";
import { useEffect, useState } from "react";

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
    },
  ]);

  /* Inscription */
  const handleSignUp = (newUser) => {
    const isAlreadySigned = users.find((user) => user.email === newUser.email)
      ? true
      : false;
    /* Adresse email */
    if (isAlreadySigned === false) {
      setIsEmailUsed(false);
      /* Mot de passe */
      if (newUser.password === newUser.confirmPassword) {
        setIsSamePassword(false);
        /* Identifiant */
        newUser.id = Date.now();
        /* Photo de profil */
        const validImageExtension = ["png", "jpg", "jpeg"];
        if (newUser.profilePicture === "")
          newUser.profilePicture = "default.png";
        else {
          let profileFile = "";
          const profile = newUser.profilePicture;
          const profileArray = profile.split("\\");
          profileFile = profileArray[2];
          const profileFileExtension = profileFile.split(".").at(1);
          console.log(profileFileExtension);

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
    const isAlreadySigned = users.find(
      (user) => user.email === email && user.password === password
    )
      ? true
      : false;

    if (isAlreadySigned) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
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
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center my-4">
      <Routes>
        {isLoggedIn === false ? (
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
            element={<Users users={users} logOut={handleLogOut} />}
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
        <Route path="/chat" Component={Chat} />
        {!isLoggedIn && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </div>
  );
};

export default App;
