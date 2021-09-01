import React, { useState } from "react";
import { userDetails } from "../hard_coded_arrays/user_details";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { isLogged } from "../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const userLogin = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      let checkUserExists = userDetails.find(
        (data) => data.email === login.email && data.password === login.password
      );
      if (checkUserExists) {
        localStorage.setItem("Token", JSON.stringify(true));
        dispatch(isLogged(true));
        history.push(`/price`);
      } else {
        alert("Use Login Credentials");
      }
    } else {
      alert("Use Login Credentials");
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "100px", marginBottom: "50px" }}
        >
          <div className="col mx-auto">
            <form
              className="w-100 p-4 shadow rounded"
              style={{ backgroundColor: "#251F29" }}
              onSubmit={userLogin}
            >
              <h5 className="text-light text-center py-2">Login Page</h5>
              <div class="alert bg-black rounded text-light" role="alert">
                <small>
                  Login with this credentials:
                  <br />
                  email: test@gmail.com <br />
                  password: test
                </small>
              </div>
              <input
                class="form-control search-box bg-black text-white"
                placeholder="Email"
                name="email"
                type="email"
                onChange={loginInput}
                value={login.email}
              />
              <input
                class="form-control search-box bg-black text-white mt-4"
                placeholder="Password"
                name="password"
                type="password"
                onChange={loginInput}
                value={login.password}
              />
              <button
                class="form-control  bg-purple text-white mt-4 text-center"
                type="submit"
                style={{ cursor: "pointer" }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
