import React from "react";
import Asset from "./Asset";
import ProgressBar from "./ProgressBar";

const TableRow = ({ data }) => {
  return (
    <tr className="flex justify-between w-100 py-5 ">
      <td className="w-[19%]">
        <Asset data={data.collAsset} />
      </td>
      <td className="w-[16%]">
        {data.totalSupply.value}
        <ProgressBar progress={data.totalSupply.percentage} height="10" />
      </td>
      <td className="w-[13%]">{data.oraclePrice}</td>
      <td className="w-[13%]">{data.reserves}</td>
      <td className="w-[13%]">{data.collateralFactor}</td>
      <td className="w-[13%]">{data.liquidationFactor}</td>
      <td className="w-[13%]">{data.liquidationPenalty}</td>
    </tr>
  );
};

export default TableRow;
