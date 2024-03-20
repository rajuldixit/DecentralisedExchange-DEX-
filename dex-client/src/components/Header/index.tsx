import ToggleTheme from "../ToggleTheme";
import { Paper, Stack, Typography } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router";

const Header = ({ isDark, handleChange }: any) => {
  const navigate = useNavigate();
  const changeRoute = (route: string) => {
    navigate(route);
  };
  return (
    <>
      <Paper elevation={0} className="header-container">
        <Stack flexDirection={"row"}>
          <Typography className="nav-item" onClick={() => changeRoute("/")}>
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
        <Stack>
          <ToggleTheme isChecked={isDark} handleChange={handleChange} />
        </Stack>
      </Paper>
    </>
  );
};

export default Header;
