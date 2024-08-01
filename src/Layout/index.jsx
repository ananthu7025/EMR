import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add window resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth + 17 <= 991) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [windowWidth]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleBodyClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div class="page-wrapper doctris-theme toggled">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main class="page-content bg-light">
        <Navbar />
        <div className="page-body">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
