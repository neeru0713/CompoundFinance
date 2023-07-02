import React from "react";

const Asset = ({ data }) => {
  return (
    <div className="flex">
      <div>
        <img src="" />
      </div>
      <div className="flex flex-col text-white">
        <div>{data.name}</div>
        <div>{data.shortName}</div>
      </div>
    </div>
  );
};

export default Asset;
