import React from "react";
import etherium from "../etherium.png";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="flex text-white pt-12 pb-2 -ml-1">
        <img
          className="h-10 rounded-full bg-black w-[3.5%] -ml-2 mr-3"
          src={etherium}
        />
        <div className="flex">
          <h1 className="text-4xl font-bold">USDC &nbsp; </h1>
          <hi className="text-4xl text-gray-400 font-bold">| Ethereum</hi>
        </div>
      </div>
      <a className="text-gray-400 pl-12" href="">
        0xc3d688B66703497DAA19211EEdff47f25384cdc3
      </a>
    </div>
  );
};

export default Header;
