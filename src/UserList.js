import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setListOfUsers(res.data);
        setLoading(false);
      }) //
      .catch((err) => setErr(err.response.data));
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="secondary" />;
  }
  return (
    <div className="list">
      <div className="d-flex justify-content-around flex-wrap">
        {listOfUsers.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
