import { withFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button/Button";

const SendMessageForm = (props) => {
  return (
    <form>
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="text"
          name="message"
          id="message"
          placeholder="Message..."
          value={props.values.message}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <Button
          color="btn-primary"
          type="submit"
          css="btn-xs"
          clic={props.handleSubmit}
        >
          <i className="bi bi-send-fill"></i>
        </Button>
      </div>
      {props.touched.message && props.errors.message && (
        <span style={{ color: "orange" }}>{props.errors.message}</span>
      )}
    </form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => {
    return {
      message: "",
      senderID: props.senderID,
      receiverID: props.receiverID,
    };
  },
  validationSchema: Yup.object().shape({
    message: Yup.string().required("Veuillez saisir votre message"),
  }),
  handleSubmit: (values, { props }) => {
    props.addMessage(values.message, values.senderID, values.receiverID);
  },
})(SendMessageForm);
