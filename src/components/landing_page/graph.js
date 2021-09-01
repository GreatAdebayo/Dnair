import React, { useEffect } from "react";
import Sidenav from "./sidenav";
import { useDispatch } from "react-redux";
import { isLogged } from "../redux/actions";
import { Line } from "react-chartjs-2";

const Graph = () => {
  const state = {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "$8650.70",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.Token) {
      let token = JSON.parse(localStorage.Token);
      if (token === true) {
        dispatch(isLogged(true));
      } else {
        dispatch(isLogged(false));
      }
    } else {
      dispatch(isLogged(false));
    }
  }, []);
  return (
    <React.Fragment>
      <div class="container-fluid mt-2" data-aos="fade-in">
        <div class="row justify-content-baseline py-auto">
          <div class="col-md-1 mx-3 bg-overlay text-center bar">
            <button class="btn">
              <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-md-10">
            <nav class="navbar navbar-expand-lg navbar-dark text-white">
              <div class="container-fluid">
                <div class=" navbar-collapse" id="navbarTogglerDemo02">
                  <input
                    class="form-control bg-black search-box text-white"
                    type="search"
                    placeholder="Search"
                  />
                  <input
                    class="form-control bg-overlay text-white ms-3 date"
                    type="date"
                    placeholder="Nov 2020 - July 2021"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row mt-2 side-nav-wrap align-items-stretch">
          <Sidenav />

          {/* <!-- Middle --> */}

          <section
            class="col-md-7 m-3 p-3 graph-section"
            data-aos="fade-zoom-in"
          >
            <div class="bg-overlay p-3">
              <h4 class="text-white mb-5">$29,800.65 </h4>

              {/* <!-- GRAPH HERE --> */}
              <Line
                data={state}
                options={{
                  title: {
                    display: true,
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </div>

            <div class="row mt-4 exchange align-items-end" data-aos="fade-up">
              <div class="col-md-7 p-3 bg-overlay ">
                <h5 class="text-white mb-5 border-left-2">Exchange</h5>

                <div class=" row text-white ">
                  <div class="col-2 text-muted">Sell</div>
                  <div class="col-7">
                    <h3>6700</h3>
                  </div>
                  <div class="col-3">
                    <select class="p-2 btn">
                      <option>USD</option>
                      <option>BTC</option>
                    </select>
                  </div>
                </div>

                <div class=" row mt-3 text-white align-items-center">
                  <div class="col-2 text-muted">Buy</div>
                  <div class="col-7">
                    <h3>0.609898</h3>
                  </div>
                  <div class="col-3">
                    <select class="p-2 btn">
                      <option>BTC</option>
                      <option>USD</option>
                    </select>
                  </div>
                </div>

                <div class="row  mt-4 text-white align-items-center">
                  <div class="col-md-6 text-muted mb-2">
                    1 BTC = 8343,43 USD
                  </div>
                  <div class="col-md-6">
                    <button class="btn btn-primary w-100 p-2">
                      Exchange{" "}
                      <span>
                        <i class="fas fa-arrow-right text-end"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-4 alexa text-white text-center bg-overlay mt-sm-3 ms-4 p-3">
                <h6 class="mb-3">Alexa Rank</h6>
                <h3>9440</h3>
              </div>
            </div>
          </section>

          {/* <!-- Last section --> */}

          <section
            class="col-md-3 m-3 bg-overlay info-card p-3"
            data-aos="fade-left"
          >
            <h5 class="text-white mb-5">Info Card</h5>

            <img src="bitcoin.png" class="img-fluid bitcoin" />
            <div class="events p-2 mt-2">
              <p class="event-head  mb-0 text-white">Description</p>
              <p class="event-note text-white mb-0 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                dolorem ea incidunt quisquam porro? Quae atque earum vel
                voluptatum maiores.
              </p>
            </div>

            <div class="row m-4 icons">
              <div class="col-5 website p-2">
                <p class="text-white text-end mb-0">
                  Website <i class="fas fa-globe"></i>
                </p>
              </div>

              <div class="col-3 website ms-2 p-2 text-center">
                {" "}
                <img src="reddit.png" class="reddit img-fluid" />
              </div>
              <div class="col-3 p-2 ms-2 text-center github">
                <p class="text-dark mb-0">
                  <i class="fab fa-github"></i>
                </p>
              </div>
            </div>

            <div class="facts pb-2">
              <h6 class="text-white">Facts</h6>
            </div>

            <div class="d-flex text-white fw-bold my-3">
              <div class="col-6">Hashing Algorithm </div>
              <div class="text-end col-6">SHA-256</div>
            </div>

            <div class="d-flex text-white fw-bold my-3">
              <div class="col-6">Country Origin </div>
              <div class="text-end col-6">Unknown</div>
            </div>

            <div class="d-flex text-white fw-bold my-3">
              <div class="col-6">Category </div>
              <div class="text-end col-6">Cryptocurrency</div>
            </div>

            <div class="events p-2 px-3 mt-4">
              <div class="d-flex text-white fw-bold my-3">
                <div class="col-6">Total Supply</div>
                <div class="text-end col-6">21000000.0</div>
              </div>

              <div class="d-flex text-white fw-bold my-3">
                <div class="col-6">Max Supply </div>
                <div class="text-end col-6">21000000.0</div>
              </div>

              <div class="d-flex text-white fw-bold my-3">
                <div class="col-6">Circulating </div>
                <div class="text-end col-6">18761950.0</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Graph;
