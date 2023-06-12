import React, { useContext } from "react";
import GlobalContext from "../../../context/global-context";

// Material-ui
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  const { ui } = useContext(GlobalContext);

  return (
    <div>
      {ui.loading && (
        <div>
          <Backdrop sx={{ zIndex: 1600 }} open={true}>
            <CircularProgress color="primary" thickness={5} size={60} />
          </Backdrop>
        </div>
      )}
    </div>
  );
};

export default Loader;
