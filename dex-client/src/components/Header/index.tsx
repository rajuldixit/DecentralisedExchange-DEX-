import ToggleTheme from "../ToggleTheme";
import {
  Button,
  Paper,
  SnackbarOrigin,
  Stack,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";
import ethereum from "../../assets/icons/ethereum.svg";
import "./style.css";
import useWalletConnect from "../../hooks/useWalletConnect";
import { useEffect, useState } from "react";
import CustomToast from "../Shared/CustomToast";

interface ToastState extends SnackbarOrigin {
  open: boolean;
}

const Header = ({ isDark, handleChange }: any) => {
  const {
    getWallet,
    connectwalletHandler,
    defaultAccount,
    errorMessage,
    userBalance
  } = useWalletConnect();
  const [toast, setToast] = useState<ToastState>({
    open: false,
    vertical: "top",
    horizontal: "center"
  });
  const { vertical, horizontal, open } = toast;
  const navigate = useNavigate();

  const handleClick = (newState: SnackbarOrigin) => () => {
    setToast({ ...newState, open: true });
  };
  const handleClose = () => {
    setToast({ ...toast, open: false });
  };
  const changeRoute = (route: string) => {
    navigate(route);
  };

  const connectToWallet = () => {
    getWallet();
    connectwalletHandler();
  };

  useEffect(() => {
    handleClick({ vertical: "bottom", horizontal: "center" });
  }, [defaultAccount]);
  return (
    <>
      <Paper elevation={0} className="header-container">
        <Stack flexDirection={"row"} alignItems={"center"}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "32px", width: "32px" }}
          />
          <Typography
            sx={{ marginLeft: "16px" }}
            className="nav-item"
            onClick={() => changeRoute("/")}
          >
            Tokens
          </Typography>
          <Typography
            sx={{ marginLeft: "16px" }}
            className="nav-item"
            onClick={() => changeRoute("/swap")}
          >
            Swap
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            fullWidth={false}
            startIcon={
              <img
                src={ethereum}
                alt="eth"
                style={{ height: "20px", width: "20px" }}
              />
            }
          >
            Ethereum
          </Button>
          <Button
            fullWidth={false}
            variant="contained"
            className="connect-button"
            onClick={connectToWallet}
          >
            {defaultAccount ? "Connected" : "Connect"}
          </Button>
        </Stack>
        <Stack>
          <ToggleTheme isChecked={isDark} handleChange={handleChange} />
        </Stack>
      </Paper>
      <CustomToast
        vertical={vertical}
        horizontal={horizontal}
        handleClose={handleClose}
        open={open}
        message={"Connection Established"}
      />
    </>
  );
};

export default Header;
