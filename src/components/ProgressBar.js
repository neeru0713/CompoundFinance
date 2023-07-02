import React from "react";

const ProgressBar = ({ progress }) => {
  const Parentdiv = {
    height: "4px",
    width: "90%",
    backgroundColor: "#2b3947",
    borderRadius: 40,
    marginTop: 6,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#00c289",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
