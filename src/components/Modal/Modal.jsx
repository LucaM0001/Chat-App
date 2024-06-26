import Button from "../Button/Button";

const Modal = (props) => {
  return (
    <>
      <div className="modal modal-sheet position-absolute d-block p-4">
        <div className="modal-dialog">
          <div className="modal-content rounded-3 shadow">
            <div className="modal-body text-center">
              <h5 className="mb-0">{props.title}</h5>
              <p className="mb-0">{props.children}</p>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <Button
                type="button"
                color="btn-link text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
                clic={props.confirm}
              >
                Oui
              </Button>
              <Button
                type="button"
                color="btn-link text-decoration-none col-6 py-3 m-0 rounded-0"
                clic={props.denied}
              >
                <strong>Non</strong>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
