import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Sidenav = () => {
  let history = useHistory();
  
  const logOut = () => {
    localStorage.setItem("Token", false);
    history.push("/");
  };
  return (
    <React.Fragment>
      <div
        class="col-md-1 side-nav m-3 bg-overlay pt-2 text-center"
        data-aos="fade-in mx-auto"
      >
        <div class="bg-overlay">
          <Link class="btn p-auto" to="/price">
            <i class="fas fa-align-justify"></i>
          </Link>

          <Link class="btn" to="/graph">
            <i class="fas fa-chart-line"></i>
          </Link>

          <button class="btn" onClick={logOut}>
            <i class="fas fa-power-off"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidenav;
