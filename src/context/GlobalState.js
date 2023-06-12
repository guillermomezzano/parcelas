import React, { useState } from "react";
import GlobalContext from "./global-context";

const GlobalState = (props) => {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "success",
  });
  const [dialog, setDialog] = useState({
    title: "",
    body: "",
    btnText: "",
    open: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        ui: {
          loading: loading,
          setLoading: setLoading,
          snackbar: snackbar,
          setSnackbar: setSnackbar,
          dialog: dialog,
          setDialog: setDialog,
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
