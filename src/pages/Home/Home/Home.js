import React, { useEffect, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [activities, setActivities] = useState([]);
  // Getting Activities
  useEffect(() => {
    fetch("http://localhost:5000/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="text-center">I GROW BY HELPING PEOPLE IN NEED. </h1>
        <div className="searchInput">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <div className="activities"></div>
    </div>
  );
};

export default Home;
