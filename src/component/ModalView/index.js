import React from "react";
import { Button, Modal } from "antd";
import "./styles.css";
import { ExclamationCircleTwoTone } from "@ant-design/icons";

const ModalView = ({ open, handleConfirm, handleCancel, data }) => {
  return (
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
          <span className="title">{data.title}</span>
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
          {data.body}
          <b>{data.bodyDate}</b>
        </p>
      </div>
    </Modal>
  );
};

export default ModalView;
