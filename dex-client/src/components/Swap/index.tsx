import { Box, Button, Container, TextField, Typography } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

import CustomTextField from "./CustomTextField";
import { useEffect, useState } from "react";
import "./style.css";
import tokenList from "../../tokenList.json";
import { fetchPrices } from "../../lib/dataApis";

interface IToken {
  symbol: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
}
const defaultPrices = {
  ratio: 0,
  tokenOne: 0,
  tokenTwo: 0
};
const Swap = () => {
  const [tokenOne, setTokenOne] = useState<IToken>(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState<IToken>(tokenList[1]);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState<string | null>(null);
  const [prices, setPrices] = useState<{
    ratio: number;
    tokenOne: number;
    tokenTwo: number;
  }>(defaultPrices);

  const onTokenUpdate = (token: IToken, tokenCount: number) => {
    resetFields();
    if (tokenCount === 1) {
      setTokenOne(token);
    } else {
      setTokenTwo(token);
    }
  };
  const onSwapTokens = () => {
    resetFields();
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  };
  const ontextFieldChange = (e: any) => {
    setTokenOneAmount(e.target.value);
    if (e.target.value && prices) {
      setTokenTwoAmount((e.target.value * prices?.ratio).toFixed(2));
    } else {
      setTokenTwoAmount(null);
    }
  };
  const onFetchPrices = async () => {
    if (tokenOne && tokenTwo) {
      const prices = await fetchPrices(tokenOne?.address, tokenTwo?.address);
      setPrices(prices);
    }
  };
  const resetFields = () => {
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    setPrices(defaultPrices);
  };
  useEffect(() => {
    onFetchPrices();
  }, []);

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
          tokenAmount={tokenOneAmount}
          ontextFieldChange={ontextFieldChange}
          selectedToken={(token: IToken) => onTokenUpdate(token, 1)}
        />
        <div className="swap-icon-wrap">
          <SwapVertIcon onClick={onSwapTokens} />
        </div>
        <CustomTextField
          isDisabled={true}
          token={tokenTwo}
          tokenAmount={tokenTwoAmount}
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
