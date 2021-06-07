import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{backgroundColor:"#000000"}}>
      <Navbar className="footer" >
        <Navbar.Brand style={{color:"white",margin:"auto"}}>
          &copy; {new Date().getFullYear()} Copyright{" "}
          <a href="https://www.mdbootstrap.com" style={{color:"indigo"}}>
            {" "}
            API: Application Programming Interface{" "}
          </a>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
