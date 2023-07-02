import React from "react";
import Graph from "./Graph";

const Graphs = () => {
  return (
    <div className="h-[50%] flex justify-between text-white mt-10">
      <Graph
        title="Total Collateral"
        cost="$413.40M"
        color="#00d395"
        graphData={[1, 11, 21, 26, 38, 39, 40, 41, 42, 7]}
      />
      <Graph
        title="Total Borrowing"
        cost="$194.71M"
        color="#8f66ff"
        graphData={[0, 5, 7, 14, 18, 20, 18, 16, 14, 10, 9, 5]}
      />
    </div>
  );
};

export default Graphs;
