import React from "react";

const ConfirmationModal = ({
  title,
  message,
  successButtonName,
  closeModal,
  modaldata,
  successAction,

}) => {
  return (
    <div >
      {/*   <label htmlFor="confirmation-modal" className="btn">
        open modal
      </label> */}

      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative ">
          <label
            htmlFor="confirmation-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action  ">
            <label onClick={()=> successAction(modaldata)}  htmlFor="confirmation-modal" className="btn">
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline   ">
              Cancel{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
