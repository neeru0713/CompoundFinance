import React from "react";
import etherium from "../etherium.png";

const Asset = ({ data }) => {
  return (
    <div className="flex">
      
    <img className="h-10 w-12 rounded-full -ml-4" src={etherium} />
      
      <div className="flex flex-col text-white text-sm items-start">
        <div>{data.name}</div>
        <div className="text-xs text-gray-500">{data.shortName}</div>
      </div>
    </div>
  );
};

export default Asset;
