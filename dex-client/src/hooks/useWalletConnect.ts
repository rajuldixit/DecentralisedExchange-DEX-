import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useState } from "react";

const useWalletConnect = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState("");

  const provider = new ethers.BrowserProvider(
    (window as any).ethereum as MetaMaskInpageProvider
  );

  const connectwalletHandler = async () => {
    const provider = new ethers.BrowserProvider(
      (window as any).ethereum as MetaMaskInpageProvider
    );
    if (provider) {
      await provider.send("eth_requestAccounts", []);
      const signerAddress = (await provider.getSigner()).getAddress();

      const balance = ethers.formatEther(
        await provider.getBalance(signerAddress)
      );
      setUserBalance(balance);
      signerAddress.then(async (resp: string) => setDefaultAccount(resp));
    }
  };
  async function getWallet() {
    const ethereum = (window as any).ethereum as MetaMaskInpageProvider;
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      return accounts;
    } catch (error) {
      setErrorMessage("not found");
    }
  }

  const getuserBalance = async (address: any) => {
    const balance = await provider.getBalance(address, "latest");
  };
  return {
    getWallet,
    connectwalletHandler,
    errorMessage,
    defaultAccount,
    userBalance
  };
};

export default useWalletConnect;
