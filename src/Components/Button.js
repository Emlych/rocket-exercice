import React from "react";

const Button = (props) => {
  return (
    <button
      className={
        props.switch1 && props.switch2 && props.switch3
          ? "main__message true-message"
          : "main__message false-message"
      }
    >
      {props.switch1 && props.switch2 && props.switch3 ? "Go!" : "No way!"}
    </button>
  );
};

export default Button;
