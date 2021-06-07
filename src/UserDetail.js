import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AtSign, Disc, FileText, Link2, Mail, PhoneCall } from "react-feather";

const UserDetail = ({ match }) => {
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      }) //;setLoading(true)}
      .catch((err) => setErr(err.response.data));
  }, [match]);
  return (
    <div className="detail">
      <Card
        style={{
          width: "20rem",
          borderRadius: "10px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{user.name}</Card.Title>
          <p
            style={{
              color: "indigo",
              marginBottom: "10px",
              textDecoration: "underline",
              marginRight: "8px",
            }}
          >
            <FileText color="indigo" />
            <span>
              <strong>Infos:</strong>
            </span>
          </p>
          <p>
            <Disc style={{ color: "indigo", marginRight: "8px" }} />Name:
            {user.username}
          </p>
          <p>
            <Mail style={{ color: "indigo", marginRight: "8px" }} />Email:
            {user.email}
          </p>
          <p>
            <AtSign style={{ color: "indigo", marginRight: "8px" }} />Address:
            {user.address.street}<span>,</span>{user.address.suite}
            <br />
            {user.address.city}<span>,</span>{user.address.zipcode}
          </p>
          <p>
            <PhoneCall style={{ color: "indigo", marginRight: "8px" }} />Phone:
            {user.phone}
          </p>
          <p>
            <Link2 style={{ color: "indigo", marginRight: "8px" }} />Website:
            {user.website}
          </p>
          <p>
            <Link2 style={{ color: "indigo", marginRight: "8px" }} />Compagny:
            {user.compagny.name}
          </p>
          <Link to="/">
            <Button style={{ background: "indigo" }}>Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetail;
