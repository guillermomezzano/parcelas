import React from "react";

const GlobalContext = React.createContext({
  ui: {
    loading: false,
    setLoading: () => {},
    snackbar: {},
    setSnackbar: () => {},
    dialog: {},
    setDialog: () => {},
  },
});

export default GlobalContext;
