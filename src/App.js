import React from "react";
import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";
import {
  ExclamationCircleTwoTone,
} from "@ant-design/icons";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleConfirm = () => {
    console.log("Confirmed Pressed");
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Tooltip title="Click to Open the Jisr Test Modal" color="purple">
        <button className="btn" onClick={showModal}>
          Click Me
        </button>
      </Tooltip>

      <Modal
        open={open}
        title={
          <>
            <span className="icon">
              <ExclamationCircleTwoTone
                twoToneColor="#B42318"
                style={{
                  fontSize: "1.3rem",
                }}
              />
            </span>
            <span className="title"> Unclosed Overdue Pay Runs</span>
          </>
        }
        onOk={handleConfirm}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button key="submit" danger type="primary" onClick={handleConfirm}>
            Skip Unclosed Periods
          </Button>,
        ]}
      >
        <div className="body">
          <p>
            Would you like to skip unclosed periods and start with this pay run{" "}
            <b>(January 2023)?</b>
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
