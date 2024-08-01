import React from 'react';
import Logo from './Logo';
import SidebarToggle from './SidebarToggle';
import NotificationsDropdown from './Notification';
import ProfileDropdown from './Profile';

const Navbar = () => (
  <div className="top-header">
    <div className="header-bar d-flex justify-content-between border-bottom">
      <div className="d-flex align-items-center">
        <Logo />
        <SidebarToggle />
        {/* <SearchBar /> */}
      </div>
      <ul className="list-unstyled mb-0 d-flex">
        <li style={{marginRight:"5px"}} className="list-inline-item mb-0 ms-1">
          <NotificationsDropdown />
        </li>
        <li className="list-inline-item mb-0 ms-1">
          <ProfileDropdown />
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
