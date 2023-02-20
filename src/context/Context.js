import React, { createContext, useState } from "react";

export const JisrContext = createContext();

export const JisrProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const modalData = {
    title: "Unclosed Overdue Pay Runs",
    submitButtonText: "Skip Unclosed Periods",
    body: "Would you like to skip unclosed periods and start with this pay run",
    bodyDate: "(January 2023)?",
  };

  return (
    <JisrContext.Provider value={{ open, setOpen, modalData }}>
      {children}
    </JisrContext.Provider>
  );
};
