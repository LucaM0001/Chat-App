import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Logo from "../../../components/Logo/Logo";
import Title from "../../../components/Title/Title";
import { withFormik } from "formik";
import * as Yup from "yup";
import Alert from "../../../components/Alert/Alert";
import "../Form.css";
import { showHideConfirmPassword, showHidePassword } from "../Form";

const SignUpForm = (props) => {
  return (
    <div id="signUpForm">
      <Logo />
      <Title>Sign Up</Title>
      {props.isEmailUsed && (
        <Alert color="alert-warning">
          {props.values.email} : cette adresse email n'est plus disponible
        </Alert>
      )}
      {props.isSamePassword && (
        <Alert color="alert-danger">
          Les 2 mot de passe doivent être identique
        </Alert>
      )}
      {props.isNotValidImage && (
        <Alert color="alert-info">
          L'image doit porter l'une des extensions suivante : png, jpg ou jpeg
        </Alert>
      )}
      <form id="signInForm">
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
                  value={props.values.firstname}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              {props.touched.firstname && props.errors.firstname && (
                <span style={{ color: "red" }}>{props.errors.firstname}</span>
              )}
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
                  value={props.values.lastname}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              {props.touched.lastname && props.errors.lastname && (
                <span style={{ color: "red" }}>{props.errors.lastname}</span>
              )}
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
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>
          {props.touched.email && props.errors.email && (
            <span style={{ color: "red" }}>{props.errors.email}</span>
          )}
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
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <span className="input-group-text">
                  <i
                    className="bi bi-eye-fill"
                    onClick={(e) => showHidePassword(e)}
                  ></i>
                </span>
              </div>
              {props.touched.password && props.errors.password && (
                <span style={{ color: "red" }}>{props.errors.password}</span>
              )}
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
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="********"
                  value={props.values.confirmPassword}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <span className="input-group-text">
                  <i
                    className="bi bi-eye-fill"
                    onClick={(e) => showHideConfirmPassword(e)}
                  ></i>
                </span>
              </div>
              {props.touched.confirmPassword &&
                props.errors.confirmPassword && (
                  <span style={{ color: "red" }}>
                    {props.errors.confirmPassword}
                  </span>
                )}
            </div>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="profilePicture" className="form-label">
            Photo de profil
          </label>
          <div className="input-group">
            <input
              className="form-control"
              type="file"
              name="profilePicture"
              id="profilePicture"
              placeholder="********"
              value={props.values.profilePicture}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <span className="input-group-text">
              <i className="bi bi-file-image-fill"></i>
            </span>
          </div>
        </div>
        <Button color="btn-primary" type="submit" clic={props.handleSubmit}>
          Sign Up
        </Button>
        <div>
          Déjà incrit ? <Link to="/">Se connecter</Link>
        </div>
      </form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePicture: "",
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string()
      .min(3, "Prénom >= 3 caractères")
      .max(20, "Prénom <= 20 caractères")
      .required("Prénom requis"),
    lastname: Yup.string()
      .min(3, "Nom >= 3 caractères")
      .max(30, "Nom <= 30 caractères")
      .uppercase("Majuscule")
      .required("Nom requis"),
    email: Yup.string()
      .min(15, "Email >= 15 caractères")
      .max(30, "Email <= 30 caractères")
      .required("Adresse email requis"),
    password: Yup.string()
      .min(8, "Mot de passe >= 8 caractères")
      .max(20, "Mot de passe <= 20 caractères")
      .required("Mot de passe requis"),
    confirmPassword: Yup.string()
      .min(8, "Mot de passe >= 8 caractères")
      .max(20, "Mot de passe <= 20 caractères")
      .required("Confirmation de mot de passe requis"),
  }),
  handleSubmit: (values, { props }) => {
    props.signUp({ ...values });
  },
})(SignUpForm);
