import { useState, useEffect } from 'react';
import useWeb3 from './useWeb3';
import FeedbackABI from '../abis/FeedbackCollector.json';

const CONTRACT_ADDRESS = '0xYourFeedbackContractAddress';

const useFeedback = () => {
  const { web3, account } = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      const instance = new web3.eth.Contract(FeedbackABI, CONTRACT_ADDRESS);
      setContract(instance);
    }
  }, [web3]);

  const submitFeedback = async (hashedFeedback) => {
    await contract.methods.submitFeedback(hashedFeedback).send({ from: account });
  };

  return { submitFeedback };
};

export default useFeedback;
