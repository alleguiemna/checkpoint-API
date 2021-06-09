import React from "react";
import { Button, Card } from "react-bootstrap";
import { Disc, Mail, Phone } from "react-feather";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="card" style={{ marginTop: "30px" }}>
      <Card
        style={{ width: "20rem", margin: "20px", backgroundColor: "#DCDCDC" }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{user.name}</Card.Title>
          <Card.Text>
            <p>
              <Disc style={{ color: "indigo", marginRight: "8px" }} />
              <span style={{ color: "indigo", textDecoration: "underline" }}>
                <strong>Username:</strong>
              </span>
              {user.username}
            </p>
            <p>
              <Mail style={{ color: "indigo", marginRight: "8px" }} />
              <span style={{ color: "indigo", textDecoration: "underline" }}>
                <strong>Email:</strong>
              </span>
              {user.email}
            </p>
            <p>
              <Phone style={{ color: "indigo", marginRight: "8px" }} />
              <span style={{ color: "indigo", textDecoration: "underline" }}>
                <strong>Phone:</strong>
              </span>
              {user.phone}
            </p>
          </Card.Text>
          <Link to={`/profile/${user.id}`}>
            <Button
              style={{
                backgroundColor: "indigo",
                color: "white",
                marginLeft: "60px",
              }}
            >
              See More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
