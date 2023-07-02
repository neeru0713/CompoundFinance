import React from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div className="h-[70%] w-[100%] bg-[#1d2833] border border-0 rounded-lg mt-20">
      <table className="flex flex-col font-semibold text-white text-sm pt-8 pl-8 w-[100%]">
        <thead className="flex justify-between font-semibold text-gray-400 text-xs pt-8 w-[100%] py-4">
          <th className="w-[19%]">Collateral Asset</th>
          <th className="w-[16%]">Total Supply</th>
          <th className="w-[13%]">Oracle Price</th>
          <th className="w-[13%]">Reserves</th>
          <th className="w-[13%]">Collateral Factor </th>
          <th className="w-[13%]">Liquidation Factor</th>
          <th className="w-[13%]">Liquidation Penalty</th>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <TableRow data={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
