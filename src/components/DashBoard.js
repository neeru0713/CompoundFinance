import React from "react";

const DashBoard = () => {
  return (
    <div className="dashboard h-[30%] w-[100%] bg-[#1d2833] border border-0 rounded-lg mt-10 flex flex-col">
      <div className="flex justify-between text-gray-400 text-sm pt-8 ml-10 w-[60%]">
        <div>
          <p>Total Earning</p>
          <h4>$213.99M</h4>
        </div>
        <div>
          <p>Earn APR</p>
          <h4>3.09%</h4>
        </div>
        <div>
          <p>Earn Distribution</p>
          <h4>0.00%</h4>
        </div>
        <div>
          <p>Reserves</p>
          <h4>$1.38M</h4>
        </div>
        {/* <p className="text-white">Utilization</p> */}
      </div>

      <div className="flex justify-between text-gray-400 text-sm pt-8 ml-10 w-[60%]">
        <div>
          <p>Total Borrowing</p>
          <h4>$194.61M</h4>
        </div>
        <div>
          <p>Borrow APR</p>
          <h4>3.99%</h4>
        </div>
        <div>
          <p>Borrow Distribution</p>
          <h4>4.73%</h4>
        </div>
        <div>
          <p>Oracle Price</p>
          <h4>$1.00</h4>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
