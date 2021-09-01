import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col text-center">
          <h5 className="text-light">Page Not Found</h5>
          <Link
            to="/price"
            class="form-control  bg-purple text-white mt-4 text-center"
            style={{ textDecoration: "none" }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
