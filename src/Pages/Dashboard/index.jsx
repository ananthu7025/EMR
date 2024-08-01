import React from 'react'

const Dashboard = () => {
  return (
    <div class="container-fluid">
    <div class="layout-specing">
        <h5 class="mb-0">Dashboard</h5>
    <div className="row">
    <div className=" col-md-4 mt-4">
      <div className="card features feature-primary rounded border-0 shadow p-4">
        <div className="d-flex align-items-center">
          <div className="icon text-center rounded-md">
            <i className="uil uil-bed h3 mb-0" />
          </div>
          <div className="flex-1 ms-2">
            <h5 className="mb-0">558</h5>
            <p className="text-muted mb-0">Patients</p>
          </div>
        </div>
      </div>
    </div>
    {/*end col*/}
 
    {/*end col*/}

    {/*end col*/}

    {/*end col*/}
    <div className=" col-md-4 mt-4">
      <div className="card features feature-primary rounded border-0 shadow p-4">
        <div className="d-flex align-items-center">
          <div className="icon text-center rounded-md">
            <i className="uil uil-medkit h3 mb-0" />
          </div>
          <div className="flex-1 ms-2">
            <h5 className="mb-0">220</h5>
            <p className="text-muted mb-0">Appointment</p>
          </div>
        </div>
      </div>
    </div>
    {/*end col*/}
    <div className=" col-md-4 mt-4">
      <div className="card features feature-primary rounded border-0 shadow p-4">
        <div className="d-flex align-items-center">
          <div className="icon text-center rounded-md">
            <i className="uil uil-medical-drip h3 mb-0" />
          </div>
          <div className="flex-1 ms-2">
            <h5 className="mb-0">10</h5>
            <p className="text-muted mb-0">Todays Appointment</p>
          </div>
        </div>
      </div>
    </div>
    {/*end col*/}
  </div>
  <div className="row">
  <div className=" col-lg-6 mt-4">
    <div className="card border-0 shadow rounded">
      <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
        <h6 className="mb-0">
          <i className="uil uil-calender text-primary me-1 h5" /> Latest
          Appointment
        </h6>
        <h6 className="text-muted mb-0">55 Patients</h6>
      </div>
      <ul className="list-unstyled mb-0 p-4">
        <li>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/01.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Calvin Carlo</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/02.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Joya Khan</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/03.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Amelia Muli</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/04.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Nik Ronaldo</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/05.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Crista Joseph</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className=" col-lg-6 mt-4">
    <div className="card border-0 shadow rounded">
      <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
        <h6 className="mb-0">
          <i className="uil uil-calender text-primary me-1 h5" /> Upcoming
          Booking
        </h6>
        <h6 className="text-muted mb-0">55 Bookings</h6>
      </div>
      <ul className="list-unstyled mb-0 p-4">
        <li>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/01.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Calvin Carlo</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/02.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Joya Khan</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/03.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Amelia Muli</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/04.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Nik Ronaldo</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-inline-flex">
              <img
                src="../assets/images/client/05.jpg"
                className="avatar avatar-md-sm rounded-circle border shadow"
                alt=""
              />
              <div className="ms-3">
                <h6 className="text-dark mb-0 d-block">Crista Joseph</h6>
                <small className="text-muted">Booking on 27th Nov, 2020</small>
              </div>
            </div>
            <div>
              <a href="#" className="btn btn-icon btn-pills btn-soft-success">
                <i className="uil uil-check" />
              </a>
              <a href="#" className="btn btn-icon btn-pills btn-soft-danger" style={{marginLeft:"5px"}}>
                <i className="uil uil-times" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

  </div>

  </div>
  )
}

export default Dashboard