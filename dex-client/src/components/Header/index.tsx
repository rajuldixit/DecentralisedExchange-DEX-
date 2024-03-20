import ToggleTheme from "../ToggleTheme";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";
import ethereum from "../../assets/icons/ethereum.svg";
import "./style.css";

const Header = ({ isDark, handleChange }: any) => {
  const navigate = useNavigate();
  const changeRoute = (route: string) => {
    navigate(route);
  };
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
          >
            Connect
          </Button>
        </Stack>
        <Stack>
          <ToggleTheme isChecked={isDark} handleChange={handleChange} />
        </Stack>
      </Paper>
    </>
  );
};

export default Header;
