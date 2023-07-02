import React from "react";
import comp from "../compound-comp-logo.png";
import uscoin from "../usd-coin-usdc-logo.png";
import LineChart from "./LineChart";

const DashBoard = () => {
  return (
    <div className="dashboard h-[30%] w-[100%] bg-[#1d2833] border border-0 rounded-lg mt-10 flex">
      <div className="flex flex-col w-[85%]">
        <div className="dbrow-1 flex text-gray-400 text-sm pt-8 ml-10 w-[100%]">
          <div>
            <p>Total Earning</p>
            <h4>$213.99M</h4>
          </div>
          <div>
            <p>Earn APR</p>
            <span className="flex">
              {" "}
              <img src={uscoin} /> <h4>3.09%</h4>{" "}
            </span>
          </div>
          <div>
            <p>Earn Distribution</p>
            <span className="flex">
              {" "}
              <img src={comp} /> <h4>0.00%</h4>{" "}
            </span>
          </div>
          <div>
            <p>Reserves</p>
            <h4>$1.38M</h4>
          </div>
          {/* <p className="text-white">Utilization</p> */}
        </div>

        <div className="dbrow-2 flex text-gray-400 text-sm pt-8 ml-10 w-[100%]">
          <div>
            <p>Total Borrowing</p>
            <h4>$194.61M</h4>
          </div>
          <div>
            <p>Borrow APR</p>
            <span className="flex">
              {" "}
              <img src={uscoin} /> <h4>3.99%</h4>{" "}
            </span>
          </div>
          <div>
            <p>Borrow Distribution</p>
            <span className="flex">
              {" "}
              <img src={comp} /> <h4>4.73%</h4>{" "}
            </span>
          </div>
          <div>
            <p>Oracle Price</p>
            <h4>$1.00</h4>
          </div>
        </div>
      </div>
      <div className="-ml-10 mr-10 mt-10">
        <LineChart />
      </div>
    </div>
  );
};

export default DashBoard;
