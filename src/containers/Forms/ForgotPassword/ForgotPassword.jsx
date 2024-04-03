import { useParams } from "react-router-dom";
import { number } from "yup";
import Alert from "../../../components/Alert/Alert";
import Button from "../../../components/Button/Button";

const ForgotPassword = (props) => {
  const users = props.users;
  const { id } = useParams();
  const user = users.find((user) => user.id === Number(id));
  return (
    <div id="forgotPassword">
      <Alert color="alert-info">
        Nom : {user.firstname} <br />
        Prénoms : {user.lastname} <br />
        Adresse email : {user.email} <br />
        Mot de passes : {user.password} <br />
      </Alert>
      <Button color="btn-dark" type="button" clic={props.goBack}>
        Retour
      </Button>
    </div>
  );
};

export default ForgotPassword;
