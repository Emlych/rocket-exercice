import React from "react";
import { useState } from "react";

const Main = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const toggleSwitch1 = () => {
    setSwitch1(!switch1);
  };
  const toggleSwitch2 = () => {
    setSwitch2(!switch2);
  };
  const toggleSwitch3 = () => {
    setSwitch3(!switch3);
  };

  return (
    <div className="main">
      <div className="main__switch">
        <div className="main__switch--buttons">
          <button
            onClick={toggleSwitch1}
            className={switch1 === false ? "false-switch" : "true-switch"}
          >
            ON
          </button>
          <button
            onClick={toggleSwitch1}
            className={switch1 !== false ? "false-switch" : "true-switch"}
          >
            OFF
          </button>
        </div>
        <div className="main__switch--buttons">
          <button
            onClick={toggleSwitch2}
            className={switch2 === false ? "false-switch" : "true-switch"}
          >
            ON
          </button>
          <button
            onClick={toggleSwitch2}
            className={switch2 !== false ? "false-switch" : "true-switch"}
          >
            OFF
          </button>
        </div>
        <div className="main__switch--buttons">
          <button
            onClick={toggleSwitch3}
            className={switch3 === false ? "false-switch" : "true-switch"}
          >
            ON
          </button>
          <button
            onClick={toggleSwitch3}
            className={switch3 !== false ? "false-switch" : "true-switch"}
          >
            OFF
          </button>
        </div>
      </div>

      <button
        className={
          switch1 && switch2 && switch3
            ? "main__message true-message"
            : "main__message false-message"
        }
      >
        {switch1 && switch2 && switch3 ? "Go!" : "No way!"}
      </button>
    </div>
  );
};

export default Main;
