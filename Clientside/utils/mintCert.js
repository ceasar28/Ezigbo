import { getContract } from "./getContract";
import { pinData } from "./pinData";
// import { ethers } from "ethers";
// const NodeUrl = import.meta.env.VITE_NODE_URL;

export const mintCertificate = async (data) => {
  // const ethereum = data.ethereum;
  const contract = await getContract();
  const tokenURI = await pinData(data);
  let tokenID;
  // const provider = new ethers.JsonRpcProvider(NodeUrl);
  // const signer = provider.getSigner();
  // const contractWithSigner = contract.connect(signer);

  // contract.addListener("CertificateClaimed", (tokenId) => {
  //   tokenID = tokenId.toString();
  // });

  const transactionResponse = await contract.claimCertificate(
    data.wallet,
    tokenURI
    //   { gasLimit: Math.round(gasEstimate * 1.1) }
  );
  // const transactionResponse = await contract.call("claimCertificate", [
  //   receipient,
  //   tokenURI,
  // ]);
  await transactionResponse.wait(); // Wait for transaction to be mined
  return {
    transactionHash: `https://mumbai.polygonscan.com/tx/${transactionResponse.hash}`,
    link: `https://testnets.opensea.io/assets/mumbai/0x6439B124574BC91A45575F7a111745CFe59b2A17/${tokenID}`,
  };
};
