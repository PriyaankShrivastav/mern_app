import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notFound">
      {" "}
      <ErrorIcon />
      <Typography> Page Not Found</Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
