import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Logo from "../../../components/Logo/Logo";
import Title from "../../../components/Title/Title";

const SignUpForm = (props) => {
  return (
    <div id="signUpForm">
      <Logo />
      <Title>Sign Up</Title>
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="firstname" className="form-label">
                {"Prénom(s)"}
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  className="form-control text-capitalize"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Votre ou vos prénom(s)"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="lastname" className="form-label">
                Nom
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-circle"></i>
                </span>
                <input
                  className="form-control text-uppercase"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Votre Nom"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Adresse email
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Mot de passe
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-key-fill"></i>
                </span>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                />
                <span className="input-group-text">
                  <i className="bi bi-eye-fill"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmation de mot de passe
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-key-fill"></i>
                </span>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="confirmPassword"
                  placeholder="********"
                />
                <span className="input-group-text">
                  <i className="bi bi-eye-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="profilPicture" className="form-label">
            Photo de profil
          </label>
          <div className="input-group">
            <input
              className="form-control"
              type="file"
              name="profilPicture"
              id="profilPicture"
              placeholder="********"
            />
            <span className="input-group-text">
              <i className="bi bi-file-image-fill"></i>
            </span>
          </div>
        </div>
        <Button color="btn-primary" type="submit">
          Sign Up
        </Button>
        <div>
          Déjà incrit ? <Link to="/">Se connecter</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
