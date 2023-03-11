import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export default alchemy;