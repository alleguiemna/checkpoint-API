import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Home, User } from "react-feather";

const Header = () => {
  return (
    <div  style={{ backgroundColor: "#000000" }}>
      <Navbar  >
        <Nav className="d-flex justify-content-around">
          <img
            src="https://www.onda-dias.eu/cms/wp-content/uploads/2018/05/api.png"
            alt=""
            height="100px"
            width="100px"
            marginBottom="10px"
            backgroundColor="indigo"
            color="indigo"
            style={{marginLeft:"150px"}}
          />
            <p style={{marginTop:"35px",color:"white",marginLeft:"150px"}}>
              <Home style={{color:"white"}} />
              Home
            </p>
            <p  style={{marginTop:"35px",color:"white",marginLeft:"150px"}}>
              {" "}
              <User style={{color:"white"}}/>
              User Details
            </p>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{marginLeft:"150px"}} />
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
