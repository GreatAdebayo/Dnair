import React, { useEffect} from "react";
import Sidenav from "./sidenav";
import { events } from "../hard_coded_arrays/event_list";
import { useDispatch } from "react-redux";
import { isLogged } from "../redux/actions";
import Rate from "./rate";
import { useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Home = () => {
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

  const allCoinState = useSelector((state) => state.allCoin);

  return (
    <div className="mb-4">
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
                <div class="navbar-collapse" id="navbarTogglerDemo02">
                  <input
                    class="form-control search-box bg-black text-white"
                    type="search"
                    placeholder="Search"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row side-nav-wrap mt-2">
          <Sidenav />
          <div class="col-md-7 leaders-wrap">
            <Rate />
            <div
              class="all-coins bg-overlay p-3 mt-4"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <h2 class="text-white mb-5">All Coins</h2>

              <div class="row justify-content-center">
                {allCoinState ? (
                  allCoinState
                    .filter((item, index) => index < 8)
                    .map((item) => {
                      return (
                        <>
                          <div class="all-coin p-3 mb-3 ms-4 col-6 col-md-3">
                            <p class="mb-0 fw-bold text-white text-center">
                              {item.name} ({item.symbol})
                            </p>
                          </div>
                        </>
                      );
                    })
                ) : (
                  <div class="all-coin p-3 mb-3 ms-4 col-6 col-md-3">
                    <SkeletonTheme color="#251F29" highlightColor="#444">
                      <small>
                        <Skeleton count={4} width={100} />
                      </small>
                    </SkeletonTheme>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-3 m-3 bg-overlay p-3 event-wrap"
            data-aos="fade-left"
          >
            <h5 class="text-white mb-5">Events</h5>

            {events.map((item, index) => {
              return (
                <React.Fragment>
                  <div class="events p-3 shadow">
                    <p class="event-head  text-white">{item.name}</p>
                    <p class="event-note text-white mb-0">{item.content}</p>
                    <div class="text-end">
                      <button class="btn event-tag">
                        <i class="fas fa-link"></i>
                      </button>
                    </div>
                  </div>{" "}
                  <br />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
