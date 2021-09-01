import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { btc } from "../redux/actions";
import { eth } from "../redux/actions";
import { allCoin } from "../redux/actions";
import axios from "axios";
import { Baseurl } from "../baseUrl";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Rate = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(Baseurl, {})
      .then((res) => {
        if (res.data) {
          let response = res.data;
          dispatch(allCoin(response));
          let btcData = response.find((data) => data.name === "Bitcoin");
          if (btcData) {
            dispatch(btc(btcData));
          }

          let ethData = response.find((data) => data.name === "Ethereum");
          if (ethData) {
            dispatch(eth(ethData));
          }
        } else {
          dispatch(btc(null));
          dispatch(eth(null));
          dispatch(allCoin(null));
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const btcState = useSelector((state) => state.btc);
  const ethState = useSelector((state) => state.eth);

  return (
    <React.Fragment>
      <div class="leaders bg-overlay p-3" data-aos="fade-zoom-in">
        <h2 class="text-white mb-5">Market Leader</h2>

        <div class="d-flex leaders-coin p-3 mb-3">
          <div class="mb-0 col-3 text-white">Bitcoin (BTC)</div>
          <div class="mb-0 col-5" style={{ color: "#00FF00" }}>
            <small>
              {btcState ? (
                parseFloat(btcState.price_change_24h).toFixed(2)
              ) : (
                <SkeletonTheme color="#251F29" highlightColor="#444">
                  <small>
                    <Skeleton count={1} width={70} />
                  </small>
                </SkeletonTheme>
              )}
            </small>
          </div>
          <div class="col-4 text-white text-end">
            <h4 class="mb-0">
              <NumberFormat
                value={btcState.current_price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value, props) => <div {...props}>{value}</div>}
              />
            </h4>
            <small style={{ fontSize: "12px", color: "#251F29" }}>
              {btcState ? (
                <>
                  updated: <Moment fromNow>{btcState.last_updated}</Moment>
                </>
              ) : (
                <SkeletonTheme color="#251F29" highlightColor="#444">
                  <small>
                    <Skeleton count={1} width={70} />
                  </small>
                </SkeletonTheme>
              )}
            </small>
          </div>
        </div>

        <div class="d-flex leaders-coin p-3 mb-3">
          <div class="mb-0 col-3 text-white">Ethereum (ETH)</div>
          <div class="mb-0 col-5" style={{ color: "#00FF00" }}>
            <small>
              {ethState ? (
                parseFloat(ethState.price_change_24h).toFixed(2)
              ) : (
                <SkeletonTheme color="#251F29" highlightColor="#444">
                  <small>
                    <Skeleton count={1} width={70} />
                  </small>
                </SkeletonTheme>
              )}
            </small>
          </div>
          <div class="mb-0 col-4 text-white text-end">
            <h4 class="mb-0">
              <NumberFormat
                value={ethState.current_price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value, props) => <div {...props}>{value}</div>}
              />
            </h4>
            <small style={{ fontSize: "12px", color: "#251F29" }}>
              {ethState ? (
                <>
                  updated: <Moment fromNow>{ethState.last_updated}</Moment>
                </>
              ) : (
                <SkeletonTheme color="#251F29" highlightColor="#444">
                  <small>
                    <Skeleton count={1} width={70} />
                  </small>
                </SkeletonTheme>
              )}
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rate;
