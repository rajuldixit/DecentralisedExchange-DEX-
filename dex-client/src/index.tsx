import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { Connector } from "@web3-react/types";
import { Web3ReactHooks } from "@web3-react/core";
import { hooks as metaMaskHooks, metaMask, hooks } from "./connectors/metaMask";
import {
  hooks as walletConnectHooks,
  walletConnect
} from "./connectors/walletConnect";
export enum Connectors {
  METAMASK,
  WALLETCONNECT
}

export interface Provider {
  connector: Connector;
  hooks: Web3ReactHooks;
}

interface Web3React {
  provider: Connector;
  getConnector: (choosenConnector: Connectors) => void;
  account: () => string;
}

const connectors: [Connector, Web3ReactHooks][] = [
  [Connectors.METAMASK, { connector: metaMask, hooks: metaMaskHooks }]
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Web3ReactProvider connectors={connectors}>
      {" "}
      <App />
    </Web3ReactProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
