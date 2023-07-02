import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Graphs from "./components/Graphs";

const tableData = [
  {
    collAsset: {
      name: "Wrapped Bitcoin",
      shortName: "WBTC",
    },
    totalSupply: "$198.88M",
    oraclePrice: "$30,513.95",
    reserves: "$0.03",
    collateralFactor: "70%",
    liquidationFactor: "77%",
    liquidationPenalty: "5%",
  },

  {
    collAsset: {
      name: "Wrapped Bitcoin",
      shortName: "WBTC",
    },
    totalSupply: "$198.88M",
    oraclePrice: "$30,513.95",
    reserves: "$0.03",
    collateralFactor: "70%",
    liquidationFactor: "77%",
    liquidationPenalty: "5%",
  },
  {
    collAsset: {
      name: "Wrapped Bitcoin",
      shortName: "WBTC",
    },
    totalSupply: "$198.88M",
    oraclePrice: "$30,513.95",
    reserves: "$0.03",
    collateralFactor: "70%",
    liquidationFactor: "77%",
    liquidationPenalty: "5%",
  },
  {
    collAsset: {
      name: "Wrapped Bitcoin",
      shortName: "WBTC",
    },
    totalSupply: "$198.88M",
    oraclePrice: "$30,513.95",
    reserves: "$0.03",
    collateralFactor: "70%",
    liquidationFactor: "77%",
    liquidationPenalty: "5%",
  },
  {
    collAsset: {
      name: "Wrapped Bitcoin",
      shortName: "WBTC",
    },
    totalSupply: "$198.88M",
    oraclePrice: "$30,513.95",
    reserves: "$0.03",
    collateralFactor: "70%",
    liquidationFactor: "77%",
    liquidationPenalty: "5%",
  },
];

console.log(tableData);

function App() {
  return (
    <div className=" h-[100vh] px-40">
      <NavBar />
      <Header />
      <Graphs />
      <DashBoard />
      <Table data={tableData} />
      <Footer />
    </div>
  );
}

export default App;
