import axios from "axios";
import { BASE_URL, TOKEN_PRICES } from "../utils/endpoints";

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
