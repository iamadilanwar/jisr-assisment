import { Tooltip } from "antd";
import React from "react";
import "./styles.css";

const ActionButton = ({ title, showModal, helpMessage }) => {
  return (
    <Tooltip title={helpMessage} color="purple">
      <button className="btn" onClick={showModal}>
        {title}
      </button>
    </Tooltip>
  );
};

export default ActionButton;
