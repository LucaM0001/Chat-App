import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Logo from "../../../components/Logo/Logo";
import Title from "../../../components/Title/Title";

const LoginForm = (props) => {
  return (
    <div id="loginForm">
      <Logo />
      <Title>Login</Title>
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
            />
          </div>
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
            />
            <span className="input-group-text">
              <i className="bi bi-eye-fill"></i>
            </span>
          </div>
          <Link to="/forgotpassword">Mot de passe oublier ?</Link>
        </div>
        <Button color="btn-primary" type="submit">
          login
        </Button>
        <div>
          Pas encore de compte ? <Link to="/signup">S'inscrire</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
