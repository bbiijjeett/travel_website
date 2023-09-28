import React, { useState } from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="navbar sidebar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className={isSidebarOpen ? "nav-toggle-hide" : "nav-toggle"}
            id="nav-toggle"
            onClick={openSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          <button
            className={isSidebarOpen ? "close-btn" : "close-btn-hide"}
            onClick={closeSidebar}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <PageLinks
          setIsSidebarOpen
          isSidebarOpen
          parentClass={isSidebarOpen ? "nav-links show-links" : "nav-links"}
          itemClass="nav-link"
        />
        {/* <PageLinks parentClass="nav-links" itemClass="nav-link" /> */}

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
