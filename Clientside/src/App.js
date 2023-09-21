import { useState, useEffect } from "react";
import Dashboard from "./Features/Dashboard";
import LandingPage from "./Features/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const getEthereumObject = () => window.ethereum;

/*
 * This function returns the first linked account found.
 * If there is no account linked, it will return null.
 */
const findMetaMaskAccount = async () => {
  try {
    const ethereum = getEthereumObject();

    /*
     * First make sure we have access to the Ethereum object.
     */
    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

function App() {
  const [wallet, setWallet] = useState(null);

  const connectWallet1 = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setWallet(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function findAccount() {
      const account = await findMetaMaskAccount();
      if (account !== null) {
        setWallet(account);
      }
    }

    findAccount();
    console.log(wallet);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage connect={connectWallet1} />} />

        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
