import React from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div className="h-[70%] w-[100%] bg-[#1d2833] border border-0 rounded-lg mt-20">
      <table>
        <thead>
          <th>Collateral Asset</th>
          <th>Total Supply</th>
          <th>Oracle Price</th>
          <th>Reserves</th>
          <th>Collateral Factor </th>
          <th>Liquidation Factor</th>
          <th>Liquidation Penalty</th>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <TableRow data={rowData} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between font-semibold  text-gray-400 text-sm pt-8 ml-10 w-[90%]"></div>
    </div>
  );
};

export default Table;
