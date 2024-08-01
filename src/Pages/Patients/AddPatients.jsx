import React from "react";
import VisitDetails from "../../components/Patients/VisitDetails";
import Documents from "../../components/Patients/Documents";
import VisitHistory from "../../components/Patients/VisitHistory";

const AddPatients = () => {
  return (
    <div className="container-fluid">
      <div className="layout-specing">
        <div className="card rounded shadow overflow-hidden mt-4 border-0">
          <div className="avatar-profile d-flex mt-4 position-relative ps-3">
            <img
              src="../assets/images/client/02.jpg"
              className="rounded-circle shadow-md avatar avatar-small"
              alt=""
            />
            <div className="ms-3">
              <h5 className="mt-3 mb-1">Calvin Carlo</h5>
              <p className="text-muted mb-0">MR ID-20120 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; Male &nbsp;|&nbsp;&nbsp;32 Year &nbsp;|&nbsp;&nbsp;kochi</p>
              <div style={{display:"flex",gap:"20px",marginTop:"5px"}}>
              <p className="text-muted mb-0">calvin@gmail.com</p>
              <p className="text-muted mb-0">789456123</p>
              </div>



            </div>
          </div>
          <div className="row">
          <VisitHistory/>

            <div style={{paddingLeft:"0px",marginLeft:"-10px"}} className="col-9 ">
              <div className="card border-0 rounded-0 p-4">
                <ul
                style={{maxWidth:"500px",paddingLeft:"0px !important",display:"flex",justifyContent:"space-between",listStyle:"none"}}
                  className=" nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-0 active"
                      id="overview-tab"
                      data-bs-toggle="pill"
                      href="#pills-overview"
                      role="tab"
                      aria-controls="pills-overview"
                      aria-selected="false"
                    >
                      <div className="text-center pt-1 pb-1">
                        <h5 className="mb-0">Visit Details</h5>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-0"
                      id="review-tab"
                      data-bs-toggle="pill"
                      href="#pills-review"
                      role="tab"
                      aria-controls="pills-review"
                      aria-selected="false"
                    >
                      <div className="text-center pt-1 pb-1">
                        <h5 className="mb-0">Documents</h5>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-4" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-overview"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                  >
                    <VisitDetails />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-review"
                    role="tabpanel"
                    aria-labelledby="review-tab"
                  >
                    <Documents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatients;
