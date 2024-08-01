import React from 'react';

const Logo = () => (
  <a href="#" className="logo-icon">
    <img
      src="../assets/images/logo.jpg"
      height={30}
      className="small"
      alt=""
    />
    <span className="big">
      <img
              src="../assets/images/logo.jpg"
      

        height={22}
        className="logo-light-mode"
        alt=""
      />
      <img
              src="../assets/images/logo.jpg"
        height={22}
        className="logo-dark-mode"
        alt=""
      />
    </span>
  </a>
);

export default Logo;
