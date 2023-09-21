export const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      console.log(obj);
      let chainId = await window.ethereum.request({ method: "eth_chainId" });
      // String, hex code of the chainId of the Polygon test network
      const maticChainId = "0x8";
      if (chainId !== maticChainId) {
        alert("You are not connected to the Polygon matic Test Network!");
      }
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status:
        ' <span><p> {" "} 🦊{" "} <a target="_blank" href={`https://metamask.io/download.html`}> You must install Metamask, a virtual Ethereum wallet, in your browser.</a> </p> </span>',
    };
  }
};
