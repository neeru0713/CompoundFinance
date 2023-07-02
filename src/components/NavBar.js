import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between ">
      <div className="text-white flex justify-between py-4 w-[40%] items-center">
        <h3 className="font-bold text-lg">Compounds</h3>
        <h2>Dashbord</h2>
        <h2>Markets</h2>
        <h2>Extentions</h2>
        <h1>Vote</h1>
      </div>
      <div className="text-white flex justify-between py-4 w-[22%] items-center">
        <div className="flex items-center">
          <p className="font-bold text-sm mr-3">USDC</p>
          <p className="text-gray-400">Ethereum</p>
        </div>
        <button className="text-xs py-3 px-4 font-semibold rounded-3xl border border-green-400 bg-[#1d2833]">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default NavBar;
