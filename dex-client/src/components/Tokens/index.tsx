import { Container, Grid, Paper, Typography } from "@mui/material";
import tokenList from "../../tokenList.json";

import "./style.css";

const Card = ({ token }: any) => {
  return (
    <>
      <Paper className="token-wrap">
        <img
          src={token.img}
          alt="token-img"
          style={{ width: "24px", height: "24px" }}
        />
        <Typography
          className="text-color text-width-wrap"
          textAlign={"left"}
          variant="body1"
        >
          {token.name}
        </Typography>
        <Typography
          className="text-color text-width-wrap"
          textAlign={"left"}
          variant="body1"
        >
          {token.symbol}
        </Typography>
        <Typography
          className="text-color text-width-wrap"
          textAlign={"right"}
          variant="body1"
        >
          {token.address.slice(0, 4) + "..." + token.address.slice(38)}
        </Typography>
      </Paper>
    </>
  );
};
const Tokens = () => {
  return (
    <Container
      maxWidth={"md"}
      sx={{
        padding: "2em 0",
        boxSizing: "border-box",
        height: "600px",
        overflowY: "scroll"
      }}
    >
      <Typography
        className="text-color"
        sx={{
          textAlign: { xs: "center", sm: "left" },
          marginBottom: { xs: "16px", sm: "8px" }
        }}
        variant="h5"
      >
        Tokens
      </Typography>
      <Grid
        sx={{ padding: { xs: "8px" } }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {tokenList.map((token, index) => (
          <Grid item xs={12} key={index}>
            <Card token={token} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Tokens;
