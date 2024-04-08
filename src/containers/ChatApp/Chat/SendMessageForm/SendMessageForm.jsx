import { withFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/Button/Button";

const SendMessageForm = (props) => {
  return (
    <form>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          name="message"
          id="message"
          placeholder="Message..."
          value={props.values.message}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        <Button type="submit" css="btn-xs" clic={props.handleSubmit}>
          <span className="input-group-text">
            <i className="bi bi-send-fill"></i>
          </span>
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
