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
        barGraph = {['h-[20%]', 'h-[32%]', 'h-[18%]', 'h-[30%]', 'h-[38%]', 'h-[28%]', 'h-[16%]', 'h-[20%]', 'h-[62%]','h-[18%]', 'h-[41%]','h-[30%]', 'h-[22%]','h-[48%]','h-[36%]']}
      />
      <Graph
        title="Total Borrowing"
        cost="$194.71M"
        color="#8f66ff"
        graphData={[0, 5, 7, 14, 18, 20, 18, 16, 14, 10, 9, 5]}
        barGraph = {['h-[20%]', 'h-[53%]', 'h-[58%]', 'h-[30%]', 'h-[38%]', 'h-[28%]', 'h-[14%]', 'h-[10%]', 'h-[42%]','h-[26%]', 'h-[31%]','h-[31%]', 'h-[62%]','h-[28%]','h-[56%]' ]}
      />
    </div>
  );
};

export default Graphs;
