import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>HomePage</div>
      <Link to="/todo" style={{ color: "red" }}>
        <h1>todoList</h1>
      </Link>
    </div>
  );
};

export default HomePage;
