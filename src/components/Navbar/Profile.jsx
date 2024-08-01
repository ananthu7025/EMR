import React from 'react';

const ProfileDropdown = () => (
  <div className="dropdown dropdown-primary">
    <button
      type="button"
      className="btn btn-pills btn-soft-primary dropdown-toggle p-0"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <img
        src="../assets/images/doctors/01.jpg"
        className="avatar avatar-ex-small rounded-circle"
        alt=""
      />
    </button>
    <div
      className="dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3"
      style={{ minWidth: 200 }}
    >
      <a
        className="dropdown-item d-flex align-items-center text-dark"
        href="profile.html"
      >
        <img
          src="../assets/images/doctors/01.jpg"
          className="avatar avatar-md-sm rounded-circle border shadow"
          alt=""
        />
        <div className="flex-1 ms-2">
          <span className="d-block mb-1">Calvin Carlo</span>
          <small className="text-muted">Orthopedic</small>
        </div>
      </a>
      <a className="dropdown-item text-dark" href="index.html">
        <span className="mb-0 d-inline-block me-1">
          <i className="uil uil-dashboard align-middle h6" />
        </span>{" "}
        Dashboard
      </a>
      <a className="dropdown-item text-dark" href="dr-profile.html">
        <span className="mb-0 d-inline-block me-1">
          <i className="uil uil-setting align-middle h6" />
        </span>{" "}
        Profile Settings
      </a>
      <div className="dropdown-divider border-top" />
      <a className="dropdown-item text-dark" href="lock-screen.html">
        <span className="mb-0 d-inline-block me-1">
          <i className="uil uil-sign-out-alt align-middle h6" />
        </span>{" "}
        Logout
      </a>
    </div>
  </div>
);

export default ProfileDropdown;
