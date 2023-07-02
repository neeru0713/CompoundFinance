import React from "react";

const Asset = ({ data }) => {
  return (
    <div className="flex">
      <img
        className="h-[30px] w-[32px] rounded-[50%] -ml-4 mr-2"
        src={data.image}
      />

      <div className="flex flex-col text-white text-sm items-start">
        <div>{data.name}</div>
        <div className="text-xs text-gray-500">{data.shortName}</div>
      </div>
    </div>
  );
};

export default Asset;
