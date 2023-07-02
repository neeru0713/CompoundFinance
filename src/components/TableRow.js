import React from "react";
import Asset from "./Asset";

const TableRow = ({ data }) => {
  return (
    <div>
      <tr className="flex">
        <td>
          <Asset data={data.collAsset} />
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </div>
  );
};

export default TableRow;
