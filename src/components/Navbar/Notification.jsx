import React from 'react';
import MailIcon from '../../Assets/Icons/MailIcon';

const notifications = [
  {
    src: "../assets/images/client/02.jpg",
    name: "Janalia",
    time: "1 hour ago",
  },
  {
    src: "https://shreethemes.in/doctris/layouts/assets/images/client/Codepen.svg",
    name: "codepen",
    time: "4 hour ago",
  },
  {
    src: "../assets/images/client/03.jpg",
    name: "Cristina",
    time: "5 hour ago",
  },
  {
    src: "https://shreethemes.in/doctris/layouts/assets/images/client/dribbble.svg",
    name: "Dribbble",
    time: "24 hour ago",
  },
  {
    src: "../assets/images/client/06.jpg",
    name: "Donald Aghori",
    time: "1 day ago",
  },
  {
    src: "../assets/images/client/07.jpg",
    name: "Calvin",
    time: "2 day ago",
  },
];

const NotificationsDropdown = () => (
  <div className="dropdown dropdown-primary">
    <button
      type="button"
      className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
     <MailIcon/>
    </button>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      4 <span className="visually-hidden">unread mail</span>
    </span>
    <div
      className="dropdown-menu dd-menu dropdown-menu-end shadow rounded border-0 mt-3 px-2 py-2"
      data-simplebar=""
      style={{ height: 320, width: 300 }}
    >
      {notifications.map(notification => (
        <a
          key={notification.name}
          href="#"
          className="d-flex align-items-center justify-content-between py-2 border-top"
        >
          <div className="d-inline-flex position-relative overflow-hidden">
            <img
              src={notification.src}
              className="avatar avatar-md-sm rounded-circle shadow"
              alt=""
            />
            <small className="text-dark mb-0 d-block text-truncat ms-3">
              You received a new email from <b>{notification.name}</b>{" "}
              <small className="text-muted fw-normal d-inline-block">
                {notification.time}
              </small>
            </small>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default NotificationsDropdown;
