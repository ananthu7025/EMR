import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidebarData = [
  {
    title: 'Dashboard',
    icon: 'uil uil-dashboard me-2 d-inline-block',
    link: '/dash'
  },
  {
    title: 'Appointment',
    icon: 'uil uil-stethoscope me-2 d-inline-block',
    link: '/appointments'
  },
  {
    title: 'Patients',
    icon: 'uil uil-wheelchair me-2 d-inline-block',
    link: '/patients'

  },
  {
    title: 'Calendar',
    icon: 'uil uil-calender me-2 d-inline-block',
    link: '/calendar'

  },
  // Add other items similarly...
];

const Sidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState({});
  const [activeItem, setActiveItem] = useState(null);

  const toggleSubMenu = (title) => {
    setActiveMenu((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
    setActiveItem(title);
  };

  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content" data-simplebar="" style={{ height: 'calc(100% - 60px)' }}>
        <div className="sidebar-brand">
          <Link to="/">
            <img src="../assets/images/logo.jpg" height={50} className="logo-light-mode" alt="" />
            <img src="../assets/images/logo.jpg" height={50} className="logo-dark-mode" alt="" />
            <span className="sidebar-colored">
              <img src="../assets/images/logo.jpg" height={50} alt="" />
            </span>
          </Link>
        </div>
        <ul className="sidebar-menu">
          {sidebarData.map((item, index) => (
            <li key={index} className={`sidebar-dropdown ${location.pathname.includes(item.link) ? 'active' : ''}`}>
              {item.link ? (
                <Link
                  to={item.link}
                  className={location.pathname === item.link ? 'active' : ''}
                >
                  <i className={item.icon} />
                  {item.title}
                  {item.badge && <span className="badge bg-danger rounded-pill ms-2">{item.badge}</span>}
                </Link>
              ) : (
                <a href="javascript:void(0)" onClick={() => toggleSubMenu(item.title)}>
                  <i className={item.icon} />
                  {item.title}
                  {item.badge && <span className="badge bg-danger rounded-pill ms-2">{item.badge}</span>}
                </a>
              )}
              {item.submenu && activeMenu[item.title] && (
                <div className="sidebar-submenu">
                  <ul>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link}
                          className={location.pathname === subItem.link ? 'active' : ''}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
