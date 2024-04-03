import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Logo from "../../../components/Logo/Logo";
import Title from "../../../components/Title/Title";
import Alert from "../../../components/Alert/Alert";
import { withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => {
  return (
    <div id="loginForm">
      <Logo />
      <Title>Login</Title>
      {props.IsSignIn && (
        <Alert color="alert-success">Inscription terminé</Alert>
      )}
      <form>
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
              <i className="bi bi-eye-fill"></i>
            </span>
          </div>
          {props.touched.password && props.errors.password && (
            <span style={{ color: "red" }}>{props.errors.password}</span>
          )}
          <br />
          <Button
            type="button"
            color="btn-link"
            clic={() => props.forgotPassword(props.values.email)}
          >
            Mot de passe oublier ?
          </Button>
        </div>
        <Button color="btn-primary" type="submit" clic={props.handleSubmit}>
          login
        </Button>
        <div>
          Pas encore de compte ? <Link to="/signup">S'inscrire</Link>
        </div>
      </form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .min(15, "Email >= 15 caractères")
      .max(30, "Email <= 30 caractères")
      .required("email requis"),
    password: Yup.string()
      .min(8, "Mot de passe >= 8 caractères")
      .max(20, "Mot de passe <= 20 caractères")
      .required("Mot de passe requis"),
  }),
  handleSubmit: (values, { props }) => {
    props.logIn(values.email, values.password);
  },
})(LoginForm);
