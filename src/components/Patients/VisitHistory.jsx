import React from 'react'

const VisitHistory = () => {
  return (
    <div style={{paddingRight:"0.5px !important"}} className="col-lg-3 mt-4">
    <div style={{marginLeft:"10px"}} className="card rounded border-0 shadow">
      <div className="p-2 border-bottom">
        <h5 className="mb-0" style={{marginLeft:"30px"}}>Vists</h5>
      </div>
      <ul
        className="list-unstyled mb-0 p-4"
        data-simplebar=""
        style={{ height: 629 }}
      >
        <li className="d-md-flex align-items-center text-center text-md-start border-bottom">
          <div className="ms-md-3 mt-4 mt-sm-0">
            <a href="#" className="text-dark h6">
              Dr. Calvin Carlo
            </a>
            <p className="text-muted my-1">Cardiologist</p>
            <p className="text-muted mb-0">17th Jan 2024</p>
          </div>
        </li>
        <li className="d-md-flex align-items-center text-center text-md-start mt-4 border-bottom">
          <div className="ms-md-3 mt-4 mt-sm-0">
            <a href="#" className="text-dark h6">
              Dr. Alex Smith
            </a>
            <p className="text-muted my-1">Dentist</p>
            <p className="text-muted mb-0">19th Aug 2024</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default VisitHistory