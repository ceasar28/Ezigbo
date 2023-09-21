import { ethers } from "ethers";
import contractAbi from "./abi.json";
// const NodeUrl = import.meta.env.VITE_NODE_URL;

export const getContract = async () => {
  const CONTRACT_ADDRESS = "0x979293De17ffDDE1056ce14543070Cec6930e1A4";

  //   const privateKey = process.env.GOERLI_PRIVATE_KEY;

  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.BrowserProvider(window.ethereum);
  const provider = new ethers.BrowserProvider(window.ethereum);
  //  const wallet = new ethers.Wallet(privateKey, provider);
  const signer = await provider.getSigner();
  //   const wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractAbi.abi,
    signer
  );

  return contract;
};
