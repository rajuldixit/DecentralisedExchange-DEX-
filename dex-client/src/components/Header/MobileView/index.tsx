import ToggleTheme from "../../ToggleTheme";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  SnackbarOrigin,
  Stack,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import logo from "../../../assets/icons/logo.svg";
import ethereum from "../../../assets/icons/ethereum.svg";
import "../style.css";
import useWalletConnect from "../../../hooks/useWalletConnect";
import { useEffect, useState } from "react";
import CustomToast from "../../Shared/CustomToast";
import useScreenResolution from "../../../hooks/useScreenResolution";
import { NavMenuBar } from "../../../utils/constant";

interface ToastState extends SnackbarOrigin {
  open: boolean;
}

const MobileView = ({ isDark, handleChange }: any) => {
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
  const { screenSmall } = useScreenResolution();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [navLinks, setNavLinks] = useState(new Array());
  const { vertical, horizontal, open } = toast;
  const navigate = useNavigate();

  const handleClick = (newState: SnackbarOrigin) => () => {
    setToast({ ...newState, open: true });
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
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
  useEffect(() => {
    setNavLinks([...NavMenuBar]);
  }, []);
  return (
    <>
      <Paper elevation={0} className="header-container">
        <Stack sx={MobileHeaderWrapper}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <img
              alt="logo"
              src={logo}
              style={{
                height: "36px",
                width: "36px",
                cursor: "pointer",
                borderRadius: "50%",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              }}
            />
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
            <>
              <MenuIcon
                onClick={toggleDrawer(true)}
                className="menu-icon"
                sx={{
                  width: screenSmall ? "44px" : "28px",
                  height: screenSmall ? "44px" : "28px"
                }}
              />
              <Drawer
                anchor={"right"}
                open={openDrawer}
                onClose={toggleDrawer(false)}
                className="drawer-style"
                PaperProps={{
                  sx: { height: "100% !important", width: "240px" }
                }}
              >
                <List>
                  {navLinks.map((nav, idx) => (
                    <ListItem key={nav.label} disablePadding>
                      <ListItemButton onClick={() => changeRoute(nav.route)}>
                        <ListItemText primary={nav.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <ListItem>
                    <Stack>
                      <Button
                        fullWidth={false}
                        variant="contained"
                        className="connect-button"
                        onClick={connectToWallet}
                      >
                        {defaultAccount ? "Connected" : "Connect"}
                      </Button>
                    </Stack>
                  </ListItem>
                  <ListItem>
                    <Stack>
                      <ToggleTheme
                        isChecked={isDark}
                        handleChange={handleChange}
                      />
                    </Stack>
                  </ListItem>
                </List>
              </Drawer>
            </>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

const MobileHeaderWrapper = {
  padding: "8px 16px 8px",
  boxSizing: "border-box",
  width: "100%"
};
export default MobileView;
