import React from "react";
import loadingIcon from "../../assets/icons/loader.svg";
import { Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src={loadingIcon} style={{ width: "100px", height: "100px" }} />
    </Stack>
  );
};

export default Loader;
