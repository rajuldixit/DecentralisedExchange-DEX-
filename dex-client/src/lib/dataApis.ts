import axios from "axios";

const BASE_URL = "http://localhost:9000";
const TOKEN_PRICES = "/tokenPrices";
const fetchPrices = async (
  tokenOneAddress: string,
  tokenTwoAddress: string
) => {
  const res = await axios.get(`${BASE_URL}${TOKEN_PRICES}`, {
    params: { addressOne: tokenOneAddress, addressTwo: tokenTwoAddress }
  });
  return res.data;
};

export { fetchPrices };
