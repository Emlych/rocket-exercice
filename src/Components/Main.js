import React from "react";
import Switch from "./Switch";
import Button from "./Button";
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
        <Switch switchx={switch1} toggleSwitch={toggleSwitch1} />
        <Switch switchx={switch2} toggleSwitch={toggleSwitch2} />
        <Switch switchx={switch3} toggleSwitch={toggleSwitch3} />
      </div>
      <Button switch1={switch1} switch2={switch2} switch3={switch3} />
    </div>
  );
};

export default Main;
