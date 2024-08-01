import React from "react";

const CancelAppointment = ({ appointment, onCancelAppointment }) => {
  if (!appointment)
    return (
      <div
        className="modal fade"
        id="cancelappointment"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body py-5"></div>
          </div>
        </div>
      </div>
    );

  const handleCancel = () => {
    onCancelAppointment(appointment.id);
  };

  return (
    <div
      className="modal fade"
      id="cancelappointment"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body py-5">
            <div className="text-center">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                style={{ height: 95, width: 95 }}
              >
                <i className="uil uil-times-circle h1 mb-0" />
              </div>
              <div className="mt-4">
                <h4>Cancel Appointment</h4>
                <p className="para-desc mx-auto text-muted mb-0">
                  Are you sure you want to cancel this appointment?
                </p>
                <div className="mt-4">
                  <button
                    onClick={handleCancel}
                    className="btn btn-soft-danger"
                    data-bs-dismiss="modal"
                    id="cancelappointment"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelAppointment;
