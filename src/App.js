import React, { useContext } from "react";
import "./App.css";
import { JisrContext } from "./context/Context";
import ActionButton from "./component/ActionButton";
import ModalView from "./component/ModalView";

function App() {
  const { open, setOpen, modalData } = useContext(JisrContext);

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
      <ActionButton
        title="Click Me"
        showModal={showModal}
        helpMessage="Click to Open the Jisr Test Modal"
      />
      <ModalView
        open={open}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
        data={modalData}
      />
    </div>
  );
}

export default App;
