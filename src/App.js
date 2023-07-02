import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Graphs from "./components/Graphs";

import wrappedBitcoin from "./wrapped-bitcoin.jpg";
import ether from "./ether.png";
import compound from "./compound-comp-logo.png";
import uniswap from "./Uniswap_Logo.png";
import chainlink from "./chainlink.png";

const tableData = [
  {
    collAsset: {
      name: "Wrapped Bitcoin",
      shortName: "WBTC",
      image: wrappedBitcoin,
    },
    totalSupply: {
      value: "$198.88M",
      percentage: "50",
    },
    oraclePrice: "$30,513.95",
    reserves: "$0.03",
    collateralFactor: "70%",
    liquidationFactor: "77%",
    liquidationPenalty: "5%",
  },

  {
    collAsset: {
      name: "Ether",
      shortName: "ETH",
      image: ether,
    },
    totalSupply: {
      value: "$147.25M",
      percentage: "20",
    },
    oraclePrice: "$1,925.16",
    reserves: "$0.00",
    collateralFactor: "83%",
    liquidationFactor: "90%",
    liquidationPenalty: "5%",
  },
  {
    collAsset: {
      name: "Compound",
      shortName: "COMP",
      image: compound,
    },
    totalSupply: {
      value: "$50.88M",
      percentage: "80",
    },
    oraclePrice: "$63.24",
    reserves: "$0.02",
    collateralFactor: "65%",
    liquidationFactor: "70%",
    liquidationPenalty: "12%",
  },
  {
    collAsset: {
      name: "Uniswap",
      shortName: "UNI",
      image: uniswap,
    },
    totalSupply: {
      value: "$12.52M",
      percentage: "98",
    },
    oraclePrice: "$5.58",
    reserves: "$0.00",
    collateralFactor: "75%",
    liquidationFactor: "81%",
    liquidationPenalty: "7%",
  },
  {
    collAsset: {
      name: "Chainlink",
      shortName: "LINK",
      image: chainlink,
    },
    totalSupply: {
      value: "$4.80M",
      percentage: "63",
    },
    oraclePrice: "$6.42",
    reserves: "$0.00",
    collateralFactor: "79%",
    liquidationFactor: "85%",
    liquidationPenalty: "7%",
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
