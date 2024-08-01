import React from "react";

const ViewAppointment = ({ appointment }) => {
  if (!appointment)
    return (
      <div
        className="modal fade"
        id="viewappointment"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom p-3">
              <h5 className="modal-title" id="exampleModalLabel">
                Appointment Detail
              </h5>
              <button
                type="button"
                className="btn btn-icon btn-close"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4 text-dark" />
              </button>
            </div>
            <div className="modal-body p-3 pt-4"></div>
          </div>
        </div>
      </div>
    );
  return (
    <div
      className="modal fade"
      id="viewappointment"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom p-3">
            <h5 className="modal-title" id="exampleModalLabel">
              Appointment Detail
            </h5>
            <button
              type="button"
              className="btn btn-icon btn-close"
              data-bs-dismiss="modal"
              id="close-modal"
            >
              <i className="uil uil-times fs-4 text-dark" />
            </button>
          </div>
          <div className="modal-body p-3 pt-4">
            <div className="d-flex align-items-center">
              <img
                src={appointment.avatar || "../assets/images/client/01.jpg"}
                className="avatar avatar-small rounded-pill"
                alt=""
              />
              <h5 className="mb-0 ms-3">{appointment.name}</h5>
            </div>
            <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
              <li>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex">
                    <h6>Age:</h6>
                    <p className="text-muted ms-2">
                      {appointment.age} years old
                    </p>
                  </li>
                  <li className="d-flex">
                    <h6>Gender:</h6>
                    <p className="text-muted ms-2">{appointment.gender}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex">
                    <h6>Date:</h6>
                    <p className="text-muted ms-2">{appointment.date}</p>
                  </li>
                  <li className="d-flex">
                    <h6>Time:</h6>
                    <p className="text-muted ms-2">{appointment.time}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
