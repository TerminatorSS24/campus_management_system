import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export default function useWeb3() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const init = async () => {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const newProvider = new ethers.providers.Web3Provider(connection);
      const newSigner = newProvider.getSigner();
      const newAddress = await newSigner.getAddress();

      setProvider(newProvider);
      setSigner(newSigner);
      setAddress(newAddress);
    };

    init();
  }, []);

  return { provider, signer, address };
}
