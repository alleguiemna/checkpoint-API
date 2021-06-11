import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AtSign, Disc, FileText, Link2, Mail, MapPin, PhoneCall } from "react-feather";

const UserDetail = ({match}) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  // useEffect(() => {
  //   return axios
  //     .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
  //     .then((res) => {
  //       setUser(res.data);
  //       console.log(res.data);
  //       setLoading(false);
  //     }) 
  //     .catch((err) => setErr(err.response.data));
  // }, [match]);
  
    const fetchData = async () => {
      await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then(res =>{
        setUser(res.data);
        console.log(res.data);
        setLoading(false);})
      .catch(err=>setErr(err.response.data));
      };
    useEffect(() => fetchData(), [])

   return (
    <div className="detail">
      {loading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <ActualStuff user={user} />
      )}
    </div>
  );
};
  const ActualStuff=({user}) =>{
    return(
    <Card 
       style={{
          width: "22rem",
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
            <Disc style={{ color: "indigo", marginRight: "8px" }} /><strong>Name:</strong>
            {user.username}
          </p>
          <p>
            <Mail style={{ color: "indigo", marginRight: "8px" }} /><strong>Email:</strong>
            {user.email}
          </p>
           <p>
            <AtSign style={{ color: "indigo", marginRight: "8px" }} /><strong>Address:</strong>
            {`${user.address.street}, ${user.address.city}`}
          </p>
          <p>
            <PhoneCall style={{ color: "indigo", marginRight: "8px" }} /><strong>Phone:</strong>
            {user.phone}
          </p>
          <p>
            <Link2 style={{ color: "indigo", marginRight: "8px" }} /><strong>Website:</strong>
            {user.website}
          </p>
          <p><MapPin style={{ color: "indigo", marginRight: "8px" }}/><strong>Geo:</strong>
          {`${user.address.geo.lat}, ${user.address.geo.lng}`}
          </p>
          <p> 
             <Link2 style={{ color: "indigo", marginRight: "8px" }} /><strong>Compagny:</strong>
             {`${user.company.name}`}
          </p> 
          <Link to="/">
            <Button style={{ background: "indigo" }}>Go Back</Button>
          </Link>
         </Card.Body>
       </Card>  
  );
  };
  
export default UserDetail;