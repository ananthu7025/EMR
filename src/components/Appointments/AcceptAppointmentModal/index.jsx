import React from 'react'

const AcceptAppointment = () => {
  return (
    <div
    className="modal fade"
    id="acceptappointment"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body py-5">
          <div className="text-center">
            <div
              className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto"
              style={{ height: 95, width: 95 }}
            >
              <i className="uil uil-check-circle h1 mb-0" />
            </div>
            <div className="mt-4">
              <h4>Accept Appointment</h4>
              <p className="para-desc mx-auto text-muted mb-0">
                Great doctor if you need your family member to get immediate
                assistance, emergency treatment.
              </p>
              <div className="mt-4">
                <a href="#" className="btn btn-soft-success">
                  Accept
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default AcceptAppointment