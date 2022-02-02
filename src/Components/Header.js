import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faSpaceShuttle} />
      <div className="header--name">Ready To Go</div>
    </div>
  );
};

export default Header;
