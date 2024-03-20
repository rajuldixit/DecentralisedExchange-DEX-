import { Box, Button, Container, TextField, Typography } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

import CustomTextField from "./CustomTextField";
import { useEffect, useState } from "react";
import "./style.css";
import tokenList from "../../tokenList.json";

interface IToken {
  symbol: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
}
const Swap = () => {
  const [tokenOne, setTokenOne] = useState<IToken>();
  const [tokenTwo, setTokenTwo] = useState<IToken>();

  const onTokenUpdate = (token: IToken, tokenCount: number) => {
    if (tokenCount === 1) {
      setTokenOne(token);
    } else {
      setTokenTwo(token);
    }
  };
  const onSwapTokens = () => {
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  };
  useEffect(() => {
    setTokenOne(tokenList[0]);
    setTokenTwo(tokenList[1]);
  }, [tokenList]);
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 80px)"
      }}
    >
      <Box className="swap-box">
        <Typography
          className="text-style"
          variant="h5"
          textAlign={"center"}
          marginBottom={"16px"}
        >
          Swap
        </Typography>
        <CustomTextField
          token={tokenOne}
          selectedToken={(token: IToken) => onTokenUpdate(token, 1)}
        />
        <div className="swap-icon-wrap">
          <SwapVertIcon onClick={onSwapTokens} />
        </div>
        <CustomTextField
          isDisabled={true}
          token={tokenTwo}
          selectedToken={(token: IToken) => onTokenUpdate(token, 2)}
        />

        <Button fullWidth={true} variant="contained" className="swap-button">
          Swap
        </Button>
      </Box>
    </Container>
  );
};

export default Swap;
