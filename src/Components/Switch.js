import React from "react";

const Switch = ({ switchx, toggleSwitch }) => {
  return (
    <div className="main__switch--buttons">
      <button
        onClick={toggleSwitch}
        className={switchx === false ? "false-switch" : "true-switch"}
      >
        ON
      </button>
      <button
        onClick={toggleSwitch}
        className={switchx !== false ? "false-switch" : "true-switch"}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
