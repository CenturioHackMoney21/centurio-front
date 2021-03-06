import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { NetworkConnector } from '@web3-react/network-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const POLLING_INTERVAL = 12_000;
const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/6021d41f9da84f44b781a54bc139048c',
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'centurio',
  appLogoUrl: 'https://centurio.blob.core.windows.net/identity/logo.png',
  darkMode: true,
});

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1] },
  defaultChainId: 1,
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
