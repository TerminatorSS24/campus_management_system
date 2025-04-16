import { useState, useEffect } from 'react';
import useWeb3 from './useWeb3';
import LostFoundABI from '../abis/LostAndFound.json';

const CONTRACT_ADDRESS = '0xYourLostFoundAddress';

const useLostFound = () => {
  const { web3, account } = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      const instance = new web3.eth.Contract(LostFoundABI, CONTRACT_ADDRESS);
      setContract(instance);
    }
  }, [web3]);

  const reportItem = async (desc, ipfsHash) => {
    await contract.methods.reportItem(desc, ipfsHash).send({ from: account });
  };

  return { reportItem };
};

export default useLostFound;
